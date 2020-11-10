import bcrypt from 'bcryptjs';

const posts = [
	{
		jobName: 'Senior Testing Engineer',
		companyName: 'Softcom',
		companyLogo:
			'https://www.google.com/search?q=images&rlz=1C1CHBF_enNG877NG877&tbm=isch&source=iu&ictx=1&fir=tKTJ2l3qimir_M%252CNo7_Kngv_J1MFM%252C_&vet=1&usg=AI4_-kRInFnHq9xdLZyth39ssJ9Ag_VkcQ&sa=X&ved=2ahUKEwjl6diWj-fsAhVlQkEAHYFPDqEQ9QF6BAgPEFo#imgrc=tKTJ2l3qimir_M',
		jobDuration: 'Full Time',
		companyWebsite: 'facebook.com',
		location: 'Lagos, Nigeria',
		jobType: 'Remote',
		jobRequirements: {
			mainRequirement:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perspiciatis. Delectus ducimus omnis sed laudantium excepturi laboriosam, quis distinctio qui sequi molestiae! Vitae architecto, explicabo corrupti suscipit sunt ullam sapiente?',
			requirementList: [
				'Lorem ipsum dolor sit amet consectetur adipisici',
				'quis distinctio qui sequi molestiae! Vitae architecto,',
				'Lorem ipsum dolor sit amet consectetur adipisicing elit',
			],
		},
		whatWillYouDo: {
			jobDetails:
				'Neque, perspiciatis. Delectus ducimus omnis sed laudantium excepturi laboriosam, quis distinctio qui sequi molestiae! Vitae architecto, explicabo corrupti suscipit sunt ullam sapient Lorem ipsum dolor sit amet consectetur adipisicing elit. ?',
			whatWillYouDoList: [
				'Neque, perspiciatis. Delectus ducimus omnis sed laudantium',
				'architecto, explicabo corrupti suscipit sunt ullam sapient',
				'sed laudantium excepturi laboriosam, quis distinctio ',
			],
		},
		howToApply: {
			applicationDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perspiciatis. Delectus ducimus omnis sed laudantium excepturi laboriosam, quis distinctio qui sequi molestiae! Vitae architecto, explicabo corrupti suscipit sunt ullam sapiente?',
			applicationLink: 'facebook.com',
		},
	},
	{
		jobName: 'Software Engineer',
		companyName: 'Softcom',
		companyLogo:
			'https://www.google.com/search?q=images&rlz=1C1CHBF_enNG877NG877&tbm=isch&source=iu&ictx=1&fir=tKTJ2l3qimir_M%252CNo7_Kngv_J1MFM%252C_&vet=1&usg=AI4_-kRInFnHq9xdLZyth39ssJ9Ag_VkcQ&sa=X&ved=2ahUKEwjl6diWj-fsAhVlQkEAHYFPDqEQ9QF6BAgPEFo#imgrc=tKTJ2l3qimir_M',
		jobDuration: 'Full Time',
		companyWebsite: 'facebook.com',
		location: 'Lagos, Nigeria',
		jobType: 'Remote',
		jobRequirements: {
			mainRequirement:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perspiciatis. Delectus ducimus omnis sed laudantium excepturi laboriosam, quis distinctio qui sequi molestiae! Vitae architecto, explicabo corrupti suscipit sunt ullam sapiente?',
			requirementList: [
				'Lorem ipsum dolor sit amet consectetur adipisici',
				'quis distinctio qui sequi molestiae! Vitae architecto,',
				'Lorem ipsum dolor sit amet consectetur adipisicing elit',
			],
		},
		whatWillYouDo: {
			jobDetails:
				'Neque, perspiciatis. Delectus ducimus omnis sed laudantium excepturi laboriosam, quis distinctio qui sequi molestiae! Vitae architecto, explicabo corrupti suscipit sunt ullam sapient Lorem ipsum dolor sit amet consectetur adipisicing elit. ?',
			whatWillYouDoList: [
				'Neque, perspiciatis. Delectus ducimus omnis sed laudantium',
				'architecto, explicabo corrupti suscipit sunt ullam sapient',
				'sed laudantium excepturi laboriosam, quis distinctio ',
			],
		},
		howToApply: {
			applicationDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perspiciatis. Delectus ducimus omnis sed laudantium excepturi laboriosam, quis distinctio qui sequi molestiae! Vitae architecto, explicabo corrupti suscipit sunt ullam sapiente?',
			applicationLink: 'facebook.com',
		},
	},
	{
		jobName: 'Backend Engineer',
		companyName: 'Softcom',
		companyLogo:
			'https://www.google.com/search?q=images&rlz=1C1CHBF_enNG877NG877&tbm=isch&source=iu&ictx=1&fir=tKTJ2l3qimir_M%252CNo7_Kngv_J1MFM%252C_&vet=1&usg=AI4_-kRInFnHq9xdLZyth39ssJ9Ag_VkcQ&sa=X&ved=2ahUKEwjl6diWj-fsAhVlQkEAHYFPDqEQ9QF6BAgPEFo#imgrc=tKTJ2l3qimir_M',
		jobDuration: 'Full Time',
		companyWebsite: 'facebook.com',
		location: 'Lagos, Nigeria',
		jobType: 'Remote',
		jobRequirements: {
			mainRequirement:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perspiciatis. Delectus ducimus omnis sed laudantium excepturi laboriosam, quis distinctio qui sequi molestiae! Vitae architecto, explicabo corrupti suscipit sunt ullam sapiente?',
			requirementList: [
				'Lorem ipsum dolor sit amet consectetur adipisici',
				'quis distinctio qui sequi molestiae! Vitae architecto,',
				'Lorem ipsum dolor sit amet consectetur adipisicing elit',
			],
		},
		whatWillYouDo: {
			jobDetails:
				'Neque, perspiciatis. Delectus ducimus omnis sed laudantium excepturi laboriosam, quis distinctio qui sequi molestiae! Vitae architecto, explicabo corrupti suscipit sunt ullam sapient Lorem ipsum dolor sit amet consectetur adipisicing elit. ?',
			whatWillYouDoList: [
				'Neque, perspiciatis. Delectus ducimus omnis sed laudantium',
				'architecto, explicabo corrupti suscipit sunt ullam sapient',
				'sed laudantium excepturi laboriosam, quis distinctio ',
			],
		},
		howToApply: {
			applicationDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perspiciatis. Delectus ducimus omnis sed laudantium excepturi laboriosam, quis distinctio qui sequi molestiae! Vitae architecto, explicabo corrupti suscipit sunt ullam sapiente?',
			applicationLink: 'facebook.com',
		},
	},
	{
		jobName: 'Ux Engineer',
		companyName: 'Softcom',
		companyLogo:
			'https://www.google.com/search?q=images&rlz=1C1CHBF_enNG877NG877&tbm=isch&source=iu&ictx=1&fir=tKTJ2l3qimir_M%252CNo7_Kngv_J1MFM%252C_&vet=1&usg=AI4_-kRInFnHq9xdLZyth39ssJ9Ag_VkcQ&sa=X&ved=2ahUKEwjl6diWj-fsAhVlQkEAHYFPDqEQ9QF6BAgPEFo#imgrc=tKTJ2l3qimir_M',
		jobDuration: 'Full Time',
		companyWebsite: 'facebook.com',
		location: 'Lagos, Nigeria',
		jobType: 'Remote',
		jobRequirements: {
			mainRequirement:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perspiciatis. Delectus ducimus omnis sed laudantium excepturi laboriosam, quis distinctio qui sequi molestiae! Vitae architecto, explicabo corrupti suscipit sunt ullam sapiente?',
			requirementList: [
				'Lorem ipsum dolor sit amet consectetur adipisici',
				'quis distinctio qui sequi molestiae! Vitae architecto,',
				'Lorem ipsum dolor sit amet consectetur adipisicing elit',
			],
		},
		whatWillYouDo: {
			jobDetails:
				'Neque, perspiciatis. Delectus ducimus omnis sed laudantium excepturi laboriosam, quis distinctio qui sequi molestiae! Vitae architecto, explicabo corrupti suscipit sunt ullam sapient Lorem ipsum dolor sit amet consectetur adipisicing elit. ?',
			whatWillYouDoList: [
				'Neque, perspiciatis. Delectus ducimus omnis sed laudantium',
				'architecto, explicabo corrupti suscipit sunt ullam sapient',
				'sed laudantium excepturi laboriosam, quis distinctio ',
			],
		},
		howToApply: {
			applicationDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perspiciatis. Delectus ducimus omnis sed laudantium excepturi laboriosam, quis distinctio qui sequi molestiae! Vitae architecto, explicabo corrupti suscipit sunt ullam sapiente?',
			applicationLink: 'facebook.com',
		},
	},
];

export default posts;
