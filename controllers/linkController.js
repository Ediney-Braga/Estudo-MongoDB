const Link = require("../models/Link");

const redirect = async (req, res) => {
    let title = req.params.title;

    try{
        let doc = await Link.findOne({title:title});
        console.log(doc);
        res.redirect(doc.url);
    } catch (error) {
        res.send(error);
    }
}

const addLink = async (req, res) => {
    let link = Link(req.body);

    try{
        let doc = await link.save();
        res.send("Link adcionado com sucesso");
    } catch (error){
        res.render("index", {error, body:req.body });
    }
}

const allLinks = async (req, res) => {
    try{
        let links = await Link.find({});
        res.render("all", {links});
    } catch (error) {
        // res.render(error, {body:req.body});
        res.send(error);
    }
}

const deleteLink = async (req, res) =>{
    let id = req.params.id;
    if(!id){
        id = req.body.id;
    }

    try{
        res.send(await Link.findByIdAndDelete(id))
    } catch (error) {
        res.send(error);
    }

}


module.exports = {redirect, addLink, allLinks, deleteLink};