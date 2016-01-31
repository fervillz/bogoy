module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'expanded', //compressed
					sourcemap: 'none',
					cacheLocation: 'sass/.cache-location',
				},
				files: [{
					'style.css': 'sass/theme.scss',
				}],
			},
		},

		autoprefixer:{
			dist: {
				files: {
					'css/theme.css': 'css/theme.css',
				},
			},
		},

		watch: {
			options: {
				livereload: true,
			},
			scripts: {
				files: ['**/*.js'],
				tasks: ['jshint'],
			},
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'autoprefixer'],
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('css', ['sass', 'autoprefixer']);
};