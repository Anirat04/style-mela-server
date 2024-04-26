require('dotenv').config()

const config = {
    LOCAL_CLIENT: process.env.LOCAL_CLIENT,
    // LOCAL_ADMIN_CLIENT: process.env.LOCAL_ADMIN_CLIENT,
    CLIENT: process.env.CLIENT
}

module.exports = config