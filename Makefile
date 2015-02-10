deploy: 
	git pull
	cp -r html/wp/* /var/www/html/wp

push: commit
	git push origin master

commit: clean
	git add -A *
	git commit

clean:
	$(RM) *~
	$(RM) **/*~
	$(RM) **/**/*~
	$(RM) **/**/**/*~
	$(RM) **/**/**/**/*~
