/**
 * DefaultController
 *
 * @description :: Server-side logic for managing defaults
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var Github = require('machinepack-github');

module.exports = {
	index: function( req, res ) {
    Github.listRepoCommits({
      repo: 'sails',
      owner: 'balderdashy',
    }).exec({
      // An unexpected error occurred.
      error: function (err){
        return sails.config[500](req, res);
      },
      // OK.
      success: function (results){
        console.dir(results[0]);
        return res.view('homepage', {
          results: results        
        });
      },
    });
    
  }
};

