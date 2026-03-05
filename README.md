# Portfolio multi-pages — Bootstrap + jQuery + PHP

## Pages
- `index.php` : accueil (tuiles vers les pages)
- `photos.php`, `videos.php`, `graphic-design.php`, `communication.php`, `sites.php`
- `cv.php`, `about.php`, `contact.php`

## Thème + langue
- Thème **sombre/clair** + langue **FR/EN** (persistés via `localStorage`)
- Appliqués sur **toutes** les pages via `data-i18n` + `js/main.js`

## Formulaire PHP
- `contact.php` poste vers `contact_submit.php`
- Messages enregistrés dans `data/messages.csv`

## Lancer en local
Lance un serveur PHP dans le dossier :
- `php -S localhost:8000`
Puis ouvre `http://localhost:8000/index.php`
