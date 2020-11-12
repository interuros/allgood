const Item = require("../models/item");


const item_list = (req, res) => {
    Item.find().limit(7)
        .then(result => {
            res.send(result.map(item => {
                let shortDesc = item.description;

                if (shortDesc.length > 90) {
                    shortDesc = shortDesc.substring(0, 89);

                    if (shortDesc.slice(-1) === ".") {
                        shortDesc += "..";
                    } else {
                        shortDesc += "...";
                    }
                }

                return {
                    price: item.price,
                    vendor: item.vendor,
                    name: item.name,
                    shortDesc: shortDesc,
                    image: item.image
                }
            }))
        })
        .catch(err => {
            res.send(err)
        });
}

/* used only to populate dummy data */
/* const item_add = (req, res) => {
    const item = new Item({
        name: "Alfa Romeo 159 2.4",
        vendor: "Žaki Palermo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 300,
        image: "https://lh3.googleusercontent.com/proxy/oqtpF9WZAaX8wwtr5CRgIALv2kUTeqq-CDe8dAWvCR3SmVflvy-fb7mP6ONFAO01NfOMEG6LBp31lFCWgryg9vMhf5quRTPMrUh3ME71tsm3Fb5B0Z9qU_QbSietvx590mXxeETmWYHmrg"
    });

    item.save()
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
} */

module.exports = {
    item_list,
    /* item_add */
}