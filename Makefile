deploy: 
	cp -r wp /var/www/html
	cp -r css /var/www/html
	cp -r js /var/www/html
	cp -r templates /var/www/html
	cp index.html /var/www/html/wp 

push: commit
	git push origin master

commit: clean
	git add -A *
	git commit

clean:
	$(RM) *~
	$(RM) html/*~
	$(RM) html/css/*~
	$(RM) html/js/*~
	$(RM) html/labs/*~
	$(RM) html/templates/*~
	$(RM) html/labs/templates/*~
	$(RM) html/lessons/*~
	$(RM) html/lessons/templates/*~
