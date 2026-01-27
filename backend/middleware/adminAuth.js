import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    try {
        // Headers ထဲကနေ token ကို ယူတာ ပိုမှန်ပါတယ် (Authorization: Bearer <token>)
        // ဒါပေမဲ့ သင်က 'token' ဆိုတဲ့ key နဲ့ ပို့ထားရင် req.headers.token နဲ့ ယူပါ
        const { token } = req.headers

        if (!token) {
            return res.status(401).json({ success: false, message: "Not authorized. Please login again!" })
        }

        // ၁။ Token ကို Verify လုပ်မယ်
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // ၂။ Payload ကို စစ်မယ် (Login တုန်းက email ပဲ ပို့ခဲ့တယ်လို့ ယူဆပါတယ်)
        // တကယ်လို့ login တုန်းက sign(email+password) နဲ့ လုပ်ခဲ့ရင် ဒီအတိုင်း ပြန်စစ်ပါ
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(403).json({ success: false, message: "Not authorized. Access denied!" })
        }

        next()
    } catch (error) {
        console.log(error)
        // 🛑 Token မှားရင် ဒါမှမဟုတ် သက်တမ်းကုန်ရင် ဒီထဲ ရောက်လာမှာပါ
        res.status(401).json({ success: false, message: "Invalid or Expired Token. Please login again!" })
    }
}

export default adminAuth;