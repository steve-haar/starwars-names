module.exports = {
	rules: {
        'body-empty': [0, 'never'],
		'body-leading-blank': [2, 'always'],
        'footer-leading-blank': [2, 'always'],
        'scope-enum': [
            2,
            'always',
            [
                'angular',
                'icons',
                'website'
            ]
        ],
        'signed-off-by': [2, 'always', 'Signed-off-by:'],
		'subject-case': [2, 'always', 'lower-case'],
		'subject-empty': [2, 'never'],
        'subject-exclamation-mark': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
        'subject-max-length': [2, 'always', 72],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'chore',
				'fix',
				'feat'
			],
		]
	},
	prompt: {
		questions: {
			type: {
				description: 'Select the TYPE of this change (required)',
				enum: {
					chore: {
						description: '🛠  any change that does not affect consumers',
						title: 'chore'
					},
					fix: {
						description: '🐛 any change to an unintended behavior that affects consumers',
						title: 'fix'
					},
					feat: {
						description: '✨ any new change in features or behavior that affects consumers',
						title: 'feat'
					}
				},
			},
			scope: {
				description: 'Select the SCOPE of this change (optional)',
                enum: {
                    angular: {
                        description: '📚 angular',
                        title: 'angular'
                    },
                    icons: {
                        description: '🎨 icons',
                        title: 'icons',
                    },
                    website: {
                        description: '🖥️  website',
                        title: 'website'
                    }
                },
			},
			subject: {
				description: 'Finish this SHORT sentence (required): "Applying this commit will..."',
			},
			body: {
				description: 'Provide a LONGER description of the change (optional):',
			},
			isBreaking: {
				description: 'Are there any breaking changes?',
			},
			breakingBody: {
				description:
					'A BREAKING CHANGE commit requires a body. Provide a LONGER description of the change:',
			},
			breaking: {
				description: 'Describe the breaking changes:',
			}
		},
	},
};
