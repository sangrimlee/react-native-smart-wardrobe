const categoryEN = ['outer', 'top', 'bottom', 'onepiece'];
const categoryKR = ['아우터', '상의', '하의', '원피스'];

const subCategoryEN = [
  'coat',
  'coat fur',
  'parka',
  'cardigan',
  'blazer',
  'bomber',
  'denim',
  'leather',
  'trench coat',
  'vest',
  'long blouse',
  'long shirt',
  'long tee',
  'sweater',
  'tutleneck',
  'short blouse',
  'short tee',
  'sling',
  'long skirt',
  'sweatpants',
  'chinos',
  'jeans',
  'leggings',
  'short skirt',
  'shorts',
  'denim shorts',
  'long dress',
  'short dress',
  'vest dress',
  'jumpsuit',
  'romper',
];

const subCategoryKR = [
  '코트',
  '코트(털)',
  '패딩',
  '가디건',
  '블레이저',
  '봄버',
  '데님 재킷',
  '레더 재킷',
  '트렌치 코트',
  '베스트',
  '블라우스(긴팔)',
  '셔츠(긴팔)',
  '긴팔 티셔츠',
  '스웨터',
  '터틀넥',
  '블라우스(반팔)',
  '반팔 티셔츠',
  '슬링',
  '롱 스커트',
  '스웻 팬츠',
  '치노 팬츠',
  '청바지',
  '레깅스',
  '미니 스커트',
  '반바지',
  '데님 쇼츠',
  '롱 드레스',
  '미니 드레스',
  '베스트 드레스',
  '점프수트',
  '롬퍼',
];

const colorKR = [
  '화이트',
  '라이트 그레이',
  '다크 그레이',
  '블랙',
  '레드',
  '핑크',
  '오렌지',
  '머스타드',
  '옐로우',
  '민트',
  '그린',
  '올리브',
  '블루',
  '네이비',
  '퍼플',
  '베이지',
  '브라운',
  '연청',
  '진청',
  '중청',
];
const colorEN = [
  'white',
  'lightgray',
  'darkgray',
  'black',
  'red',
  'pink',
  'orange',
  'mustard',
  'yellow',
  'mint',
  'green',
  'olive',
  'blue',
  'navy',
  'purple',
  'beige',
  'brown',
  'lightjean',
  'darkjean',
  'jean',
];
export const changeCategoryKR = (category) => {
  const idx = categoryEN.indexOf(category);
  return categoryKR[idx];
};
export const changeCategoryEN = (category) => {
  const idx = categoryKR.indexOf(category);
  return categoryEN[idx];
};

export const changeSubCategoryKR = (subCategory) => {
  const idx = subCategoryEN.indexOf(subCategory);
  return subCategoryKR[idx];
};
export const changeSubCategoryEN = (subCategory) => {
  const idx = subCategoryKR.indexOf(subCategory);
  return subCategoryEN[idx];
};

export const changeColorKR = (color) => {
  const idx = colorEN.indexOf(color);
  return colorKR[idx];
};
export const changeColorEN = (color) => {
  const idx = colorKR.indexOf(color);
  return colorEN[idx];
};
export const changeFormat = (itemInfo) => {
  const {
    id,
    name,
    color,
    category,
    subcategory,
    url,
    descript,
    brand,
    like,
  } = itemInfo;
  return {
    id: id,
    category: changeCategoryKR(category),
    subCategory: changeSubCategoryKR(subcategory),
    itemName: name,
    color: changeColorKR(color),
    imageUrl: url,
    brand: brand,
    description: descript,
    like: like,
  };
};

export const changeModifiedFormat = (itemInfo) => {
  const {
    id,
    newCategory,
    newSubCategory,
    itemName,
    imageUrl,
    brand,
    color,
    description,
    like,
  } = itemInfo;
  return {
    id,
    category: newCategory,
    subCategory: newSubCategory,
    itemName,
    color,
    imageUrl,
    brand,
    description,
    like,
  };
};

export const changeFormatList = (itemList) => {
  return itemList.map((itemInfo) => changeFormat(itemInfo));
};

export const changeFormatRecommendationList = (recommendationList) => {
  for (let i = 0; i < recommendationList.length; i++) {
    recommendationList[i].itemList = recommendationList[i].itemList.filter(
      (itemInfo) => typeof itemInfo === 'object',
    );
    recommendationList[i].itemList = recommendationList[
      i
    ].itemList.map((itemInfo) => changeFormat(itemInfo));
  }
  return recommendationList;
};
