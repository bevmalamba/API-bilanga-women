import vine from '@vinejs/vine'




export const contactValidator = vine.compile(
    vine.object({
      name: vine.string().trim().minLength(3),
      email: vine.string().trim().email(),
      tel: vine.string()
        .trim()
        .escape()
        .regex(/^\+?[0-9]{10,15}$/),
        message: vine.string().maxLength(1000).minLength(20),
    subject:vine.string().maxLength(155).minLength(5)
    })
  )