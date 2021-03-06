module.exports=(app)=>{
    const blog=require('../controllers/controllers');

    app.get('/api/blogs',blog.getall);
    app.get('/api/blogs/:value/:type',blog.getone);  //value can be id, title, author, desc
    app.post('/api/create',blog.create);
    app.put('/api/update/:blogID',blog.updateone);
    app.delete('/api/delete/:blogID',blog.deleteone);
}