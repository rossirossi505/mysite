const path = require('path')
const express = require('express')
const hbs = require('hbs')
const port = process.env.PORT || 3000


const app = express()




const publicPath = path.join(__dirname, '../public')
const pathviews = path.join(__dirname, '../templates')
const pathPartials = path.join(__dirname, '../partials')
app.set('view engine', 'hbs')
app.set('views', pathviews)
hbs.registerPartials(pathPartials)

app.use(express.static(publicPath))


app.get('', (req, res)=>{
    res.render('index')
    })
app.get('/index.html', (req, res)=>{
      res.render('index')
      })
app.get('/about.html', (req, res)=>{
   res.render('about')
})
    
app.get('/knit.html', (req, res)=>{
   res.render('knit')
})
            
app.get('/contact.html', (req, res)=>{
  res.render('contact')
})
      
app.get('/jobs.html', (req, res)=>{
    res.render('jobs')
    })
    
app.get('/woven.html', (req, res)=>{
   res.render('woven')
})
    
app.get('/whyus.html', (req, res)=>{
   res.render('whyus')
})
            
app.get('/service.html', (req, res)=>{
  res.render('service')
})
                
app.get('/reseller.html', (req, res)=>{
    res.render('reseller')
  })

  app.get('/team.html', (req, res)=>{
    res.render('team')
  })

  app.get('*',(req,res) =>{
    res.send('page not found')
    })
    


app.listen(port, ()=>{
    console.log('port no: '+ port)
})