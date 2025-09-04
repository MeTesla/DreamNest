Home:   navbar, 5 categories (img name icon), 
        ll categories (icons (as filters) + listing card (slider))

CategoryPage : it's filter for categories : elle affiche ListingCards component

ListingCard comp : slider, wish heart
ListingDetails : détails de ListingCard + Booking (calender) + wish heart

Property liste : mes places/ listing. ListingCard component
Become a host / CreateListing : long form to add a property/place

WishList : listing wish (favoris) , ListingCard component
Trip list : My Booked listing /places
Reservation list : someone book my property/place

RegisterPage.jsx
LoginPage.jsx
HomePage.jsx

CreateListing.jsx
ListingDetails.jsx

CategoryPage.jsx
SearchPage.jsx

PropertyList.jsx        My places
ReservationList.jsx     He booked

TripList.jsx            My Booked places
WishList.jsx            My Favorite
-------------------------------------------------
je développer une application de location d'appartement avec react js et express.
je te donne des informations et tu me proposes comment serait ma base de données (les collections, les champs, les relations ...)
un utiliateur peut avoir un appartement
il peut louer un appatement d'un autre utilisateur
il peut ajouter des appartements aux favoris
il peut voir qui a loué son appartement.


Utilisateurs	- _id (ObjectId)  - nom (String)  - email (String, unique)  - mot_de_passe (String)  
                - appartements (Array of ObjectId, référence à la collection Appartements)  
                - favoris (Array of ObjectId, référence à la collection Appartements)

Appartements	- _id (ObjectId)  - titre (String)  - description (String)  - prix (Number)  
                - emplacement (String)  - propriétaire (ObjectId, référence à la collection Utilisateurs)  
                - loué_par (ObjectId, référence à la collection Utilisateurs, nullable)  
                - date_disponibilite (Date)  - images (Array of Strings, URLs des images)

Locations	    - _id (ObjectId)  - appartement_id (ObjectId, référence à la collection Appartements)  
                - locataire_id (ObjectId, référence à la collection Utilisateurs)  - date_debut (Date)  
                - date_fin (Date)  - statut (String, par exemple "en cours", "terminée")
-----------------------------------------------------
RELATIONS :::::::::
--------------------
Utilisateurs et Appartements :
Un utilisateur peut avoir plusieurs appartements. Cela se fait par une référence dans la collection Utilisateurs avec un tableau d'ObjectId pointant vers la collection Appartements.
Chaque appartement a un champ propriétaire qui référence l'utilisateur qui possède l'appartement.
Locations :
La collection Locations gère les relations de location entre utilisateurs et appartements. Chaque document de cette collection contient des références à l'appartement loué et au locataire.
Favoris :
Les utilisateurs peuvent ajouter des appartements à leurs favoris, ce qui est géré par un tableau d'ObjectId dans la collection Utilisateurs pointant vers la collection Appartements.
Historique des Locations :
Pour voir qui a loué un appartement, vous pouvez utiliser le champ loué_par dans la collection Appartements, qui référence l'utilisateur qui a loué l'appartement.
Exemple de Documents
