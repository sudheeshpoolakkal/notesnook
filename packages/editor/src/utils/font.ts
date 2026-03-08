/*
This file is part of the Notesnook project (https://notesnook.com/)

Copyright (C) 2023 Streetwriters (Private) Limited

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import { getFontConfig } from "@notesnook/theme";

const FONTS = [
  {
    title: "Monospace",
    id: "monospace",
    font: getFontConfig().fonts.monospace
  },
  {
    title: "Sans-serif",
    id: "sans-serif",
    font: getFontConfig().fonts.body
  },
  {
    title: "Serif",
    id: "serif",
    font: `Noto Serif, Times New Roman, serif`
  },
  {
    title: "Aquiline",
    id: "aquiline",
    font: `"Aquiline", cursive`
  },
  {
    title: "Attic",
    id: "attic",
    font: `"Attic", serif`
  },
  {
    title: "Averia Serif",
    id: "averia-serif",
    font: `"Averia Serif", serif`
  },
  {
    title: "Bastarda",
    id: "bastarda",
    font: `"Bastarda", serif`
  },
  {
    title: "Caladea",
    id: "caladea",
    font: `"Caladea", serif`
  },
  {
    title: "Caslon Antique",
    id: "caslon-antique",
    font: `"Caslon Antique", serif`
  },
  {
    title: "Charis SIL",
    id: "charis-sil",
    font: `"Charis SIL", serif`
  },
  {
    title: "Gentium",
    id: "gentium",
    font: `"Gentium", serif`
  },
  {
    title: "Gentium Book",
    id: "gentium-book",
    font: `"Gentium Book", serif`
  },
  {
    title: "Great Victorian",
    id: "great-victorian",
    font: `"Great Victorian", cursive`
  },
  {
    title: "Harry Potter",
    id: "harry-potter",
    font: `"Harry Potter", fantasy`
  },
  {
    title: "Hogwarts Wizard",
    id: "hogwarts-wizard",
    font: `"Hogwarts Wizard", fantasy`
  },
  {
    title: "Inkpot",
    id: "inkpot",
    font: `"Inkpot", serif`
  },
  {
    title: "Literata",
    id: "literata",
    font: `"Literata", serif`
  },
  {
    title: "Lumos",
    id: "lumos",
    font: `"Lumos", fantasy`
  },
  {
    title: "Noto Sans Thai",
    id: "noto-sans-thai",
    font: `"Noto Sans Thai", sans-serif`
  },
  {
    title: "OFL Goudy",
    id: "ofl-goudy",
    font: `"OFL Goudy", serif`
  },
  {
    title: "Old Standard TT",
    id: "old-standard-tt",
    font: `"Old Standard TT", serif`
  },
  {
    title: "Parchment MF",
    id: "parchment-mf",
    font: `"Parchment MF", cursive`
  },
  {
    title: "Parseltongue",
    id: "parseltongue",
    font: `"Parseltongue", fantasy`
  },
  {
    title: "Rustic Roadway",
    id: "rustic-roadway",
    font: `"Rustic Roadway", serif`
  },
  {
    title: "Sabon",
    id: "sabon",
    font: `"Sabon", serif`
  },
  {
    title: "Sarabun",
    id: "sarabun",
    font: `"Sarabun", sans-serif`
  },
  {
    title: "Sorts Mill Goudy",
    id: "sorts-mill-goudy",
    font: `"Sorts Mill Goudy", serif`
  },
  {
    title: "Source Serif 4",
    id: "source-serif-4",
    font: `"Source Serif 4", serif`
  },
  {
    title: "Spectral",
    id: "spectral",
    font: `"Spectral", serif`
  }
];

export function getFonts() {
  return FONTS;
}

export function getFontById(id: string) {
  return FONTS.find((a) => a.id === id);
}

export function getFontIds() {
  return FONTS.map((a) => a.id);
}
