

exports.get404 = function (req, res, next) {
    res.status(404).render("404", { pageTitle: "Not Found" });
};