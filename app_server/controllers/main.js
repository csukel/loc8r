/**
 * Created by l.stylianou on 27/12/2016.
 */

module.exports.index = function(req,res,next){
    res.render('index', { title: 'Express' });
};