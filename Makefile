deploy: 
	cp -r wp/* /var/www/html/wp

push: commit
	git push origin master

commit: clean
	git add -A *
	git commit

clean:
	$(RM) *~
	$(RM) html/*~
	$(RM) html/wp/*~
	$(RM) html/css/*~
	$(RM) html/js/*~
	$(RM) html/labs/*~
	$(RM) html/templates/*~
	$(RM) html/labs/templates/*~
	$(RM) html/lessons/*~
	$(RM) html/lessons/templates/*~
