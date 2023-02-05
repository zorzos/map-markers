# Map-markers app

Technology stack used:

* Angular
* Typescript
* ng-zorro
* @angular/google-maps

---

**Short blurb:** The application lets users play around with a preset list of map markers.

---
The application (running at [http://localhost:4200](http://localhost:4200)) is designed with Angular and the use of ng-zorro library. 
The first route of the application is displaying a map with some preset locations (found in assets/locations.json) and lets users interact with the map.
The second route of the applications is displaying said map markers in a table that can be sorted, searched and also users can append new map marker data into it.
To run the application locally, navigate to the root directory of this repository and run (once):

```
npm i
```

And then to actually start the front end application:

```
npm start
```

Note: for the application to be actually runnable, one NEEDS to change the API key -- found in src/index.html
