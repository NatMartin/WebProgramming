deploy: 
	cp -r html/wp/* /var/www/html/wp

push: commit
	git push origin master

commit: clean
	git add -A *
	git commit

clean:
	$(RM) *~
	$(RM) html/*~
	$(RM) html/wp/*~
	$(RM) html/wp/css/*~
	$(RM) html/wp/js/*~
	$(RM) html/wp/labs/*~
	$(RM) html/wp/templates/*~
	$(RM) html/wp/labs/templates/*~
	$(RM) html/wp/lessons/*~
	$(RM) html/wp/lessons/templates/*~
