build:
	gatsby clean
	gatsby build

deploy:
	ansible all -m ansible.builtin.copy -a 'src=./public dest=/var/www/html'
