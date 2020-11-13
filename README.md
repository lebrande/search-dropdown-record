# Search + Dropdown = Wyszukiwarka stanów

### Linki:
- https://fusejs.io/
- https://bulma.io/documentation/
- https://github.com/CivilServiceUSA/us-states

## Opis projektu
- wyszukiwarka stanów w USA
- po wpisaniu frazy rozwija się dropdown z pasującymi wynikami
- wyszukiwanie fuzzy search za pomocą biblioteki `Fuse.js`
- sterowanie klawiaturą
- strona z informacjami na temat stanu
- mogę też wrócić i wyszukiwać dalej

DO DZIEŁA!

## Instalacją bundlera parcel

- upewnij się, że masz zainstalowanego `node.js`
- w tym odcinku pokazuję jak to zrobic (karta do odcinka)
- przechodzę do terminala i wpisuję `npm init -y`
- następnie `npm i -S parcel-bundler`
- tworzę katalog `src` a w nim plik `index.js`, wpisuję `hello world`
- tworzę plik `index.html` i wypełniam go treścią
- dodaję tag script do pliku js
- w pliku `package.json` dodaję `"start": "parcel src/index.html"`
- przechodzę do terminala i uruchamiam serwer deweloperski `npm start`
- sprawdzam w przeglądarce czy wszystko ok

## Instalacja Reacta i Bulmy

- z Parcelem jest bardzo proste 
- przechodzę do pliku `index.js` i importuję co mi potrzebne, Parcel pobiera w tle
- jeszcze trzeba dodac `div` z odpowiednim id do `index.html`
- zatrzymuję serwer
- Bulma: w terminalu wpisuję `npm i -S bulma`
- importuję plik CSS

## Tworzę dropdown z inputem

- tworzę komponent `App.js` w katalogu `components`
- w dokumentacji bulmy (link wyżej) `Components/Dropdow`
- kopiuję kod, ale zamieniam button na input
- input jest w sekcji `Form`
- pamiętaj o zmianie `class` na `className`

## Przygotowanie do wyszukiwania

- będę potrzebować wartości z inputa
- zapisuję ją do stanu używając hooka `useState`

## Dane do przeszukiwania

- link do repo z listą stanów coś na githubie (link wyżej)
- kopiuję danie z jsona do pliku `states.json`

## Instalacja Fuse.js

- po zmianie `query`, więc skorzystam z hooka `useEffect`
- w środku funkcji będę chciał zareagować na zmianę `query`
- wtedy przeszukuję listę i zapisuję nową listę wyników
- tworzę stan stan takiej listy
- do wyszukiwania użyję biblioteki `fuse.js`
- przechodzę do dokumentacji i sprawdzam jak zainstalować i jak używać
- kopiję kod do funkcji hooka `useEffect` i przerabiam do własnych potrzeb
- przefiltrowaną listę zapisuję do stanu

## Renderowanie listy z wynikami

- biorę zmienną `resultsList` i mapuję zamiast tych testowych obiektów
- niestety muszę użyć tagu <a> bo inaczej klasa `is-active` nie będzie działać
- trzeba pamiętać o propsie `key`
- jako label ustawiam nazwę stanu czyli klucz `state`
