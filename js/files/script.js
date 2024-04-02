// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
import { bodyLock, bodyUnlock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const countriesSelectOriginal = document.querySelector('#countries');
const countriesList = document.querySelectorAll('.select-contacts__item.select__option');
const citiesList = document.querySelectorAll('.select-contacts__city.select__option');
const countrySelects = document.querySelectorAll('[data-country]');
const phones = document.querySelectorAll('.contacts-header__phone');

// filter button
const filerButton = document.querySelector('.body-catalog__filter-button');


for (let select of countrySelects) {
   if (select.dataset.country != countriesSelectOriginal.value) {
      select.parentElement.style.display = 'none';
   }
}

document.addEventListener('click', e => {
   for (let item of countriesList) {
      if (e.target == item) {
         for (let select of countrySelects) {
            if (select.dataset.country != countriesSelectOriginal.value) {
               select.parentElement.style.display = 'none';
            } else {
               select.parentElement.style.display = 'block';
               for (let city of citiesList) {
                  if (select.value == city.dataset.value) {
                     for (let number of phones) {
                        if (number.id == city.dataset.value) {
                           number.style.display = 'flex';
                        } else {
                           number.style.display = 'none';
                        }
                     }
                  }
               }
            }
         }
      }
   }

   for (let city of citiesList) {
      if (e.target == city) {
         for (let number of phones) {
            if (number.id == city.dataset.value) {
               number.style.display = 'flex';
            } else {
               number.style.display = 'none';
            }
         }
      }
   }

   if (filerButton == e.target) {
      bodyLock();
      document.documentElement.classList.add("filter-open");
   } else if (e.target == document.querySelector(".catalog__content") || e.target == document.querySelector(".sidebar-catalog__lines")) {
      bodyUnlock();
      document.documentElement.classList.remove("filter-open");
   }
});
