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
PROMPT 1 :
je développer une application de location d'appartement avec react js et express.
je te donne des informations et tu me proposes comment serait ma base de données (les collections, les champs, les relations ...)
un utiliateur peut avoir un appartement
il peut louer un appatement d'un autre utilisateur
il peut ajouter des appartements aux favoris
il peut voir qui a loué son appartement.

PROMPT 2 :
c'est pour une appliation web de location d'appartement. j'ai deux collections (mongodb) : utilisateur et appartement.
crée moi la relation (un utilisateur peut louer un ou plusieurs appartements).
crée moi un schéma minimal des deux collections.
crée moi la fonction (express js) qui choisit les info du locataire à partir de la collection appartement.



Utilisateurs	- _id (ObjectId)  - nom (String)  - email (String, unique)  - mot_de_passe (String)  
                - appartements (Array of ObjectId, Appartements)  
                - favoris (Array of ObjectId, Appartements)

Appartements	- _id (ObjectId)  -propriétaire (ObjectId), - loué_par (ObjectId)
                - images (Array of Strings, URLs des images)
                
                - titre (String)  - description (String)  - prix (Number)  
                - emplacement (String) 
                - date_disponibilite (Date) 

Locations	- _id (ObjectId)  - appartement_id (ObjectId)  - locataire_id (ObjectId)  - date_debut (Date)  
                - date_fin (Date)
-----------------------------------------------------
RELATIONS :::::
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


# Les requêtes :
# - Enregistrer 
# - Login

# - Voir tous les appartements.                 get - model.find()              
# - CRUD des appt / add - update..              post- model.save()

# - Voir détail d'un apt + Louer cet apt        get - model.findById /:appt_id
# - Voir mon appartement                        get - model.findById /:user_id      User.findById(userId).populate('apptsLoues')
# - Voir mes favoris                            
# - Louer un apt                                post- ReservationModel.save()

# - Voir qui a loué mon apt                     au moment où qlq loue un appartement, je verfie si il n'est pas loué d'abord 
#                                               sinon j'ajoute l'id locataire au champs reservation list
#                                               Un message/ émail, notification, demande de discussion,

# - Filtrer les appt par catégorie              get - req.query/ req.params model.find({category: queryCategory}) 
# - chercher / filtrer un appt par mot clé 
    (adress, categorie, nbr de lit ...)



#                       - Utilisateur         - Appt           -Réservation