import express from 'express'
import multer from 'multer'
import Cours from '../models/cours'

const coursRouter = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.fieldname )
    }
  })
   
  var upload = multer({ storage: storage })

coursRouter.get("/", (req, res) => {
    Cours.find({}, (err, cours)=>{
        if(err) console.log(err)
        res.json(cours)
    })
});

coursRouter.get("/add", (req,res)=>{
    res.send('add a cours')
})

coursRouter.post("/add", upload.single("img"), (req, res) => {
        const datas = req.body;
        datas["img"] = req.file.filename

         const newCours = new Cours(datas)

        newCours.save((err, saveCour )=>{
            if(err) console.log(err)
            res.redirect('http://localhost:3000/cours')
        })
    })

coursRouter.get("/:id", (req, res) => {
    Cours.findById(req.params.id, (err, cour)=>{
        if(err) console.log(err)
        res.json(cour) //je recupere l'id et tout les données en format json
    })
});

coursRouter.post("/edit/:id", (req, res) => {
    Cours.findByIdAndUpdate(req.params.id, req.body, (err, cour)=>{
        if(err) console.log(err)
        res.redirect('http://localhost:3000/cours')
        })
});

coursRouter.get("/delete/:id", (req,res) => {
    //let idParams = { _id: req.params.id }
    Cours.findByIdAndRemove(req.params.id,(err, cour) => {
        if(err) console.log(err)
        res.redirect('http://localhost:3000/cours')
    })
})


export default coursRouter