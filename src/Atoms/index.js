import { atom } from 'recoil';

const AddProduct = atom({
  key: "atom-product",
  default: JSON.parse(window.localStorage.getItem('product')) === null ? {} : JSON.parse(window.localStorage.getItem('product'))
})

const HeaderName = atom({
  key: "atom-header-name",
  default: ''
})

const OffBtnAddItemPlus = atom({
  key: "atom-off-btn-add-item-plus",
  default: JSON.parse(window.localStorage.getItem('product-count')) === null ? [] : JSON.parse(window.localStorage.getItem('product-count'))
})

const AtomData = atom({
  key: "atom-data",
  default: {
    categores: {
      burgers: {
        id: 2,
        title: "برگرها",
        url: "burgers",
        image: "/images/03.png",
        categores: {
          special_burgers: {
            id: 0,
            title: "برگر گوشت",
            url: "special_burgers",
            image: "/images/01.png",
          },
          chicken_burgers: {
            id: 1,
            title: "برگر مرغ",
            url: "chicken_burgers",
            image: "/images/02.png",
          },
          chicken_other: {
            id: 1,
            title: "سایر برگرها",
            url: "chicken_other",
            image: "/images/03.png",
          },
        }
      },
      sandwiches: {
        id: 3,
        title: "Sandwiches",
        url: "sandwiches",
        image: "/images/04.png",
        categores: {}
      },
      wraps: {
        id: 4,
        title: "Wraps",
        url: "wraps",
        image: "/images/05.png",
      },
      grills: {
        id: 5,
        title: "Grills",
        url: "grills",
        image: "/images/06.png",
      },
      desserts: {
        id: 6,
        title: "Desserts",
        url: "desserts",
        image: "/images/07.png",
      },
      side: {
        id: 7,
        title: "Sids",
        url: "sids",
        image: "/images/08.png",
      },
      drinks: {
        id: 8,
        title: "Drinks",
        url: "drinks",
        image: "/images/09.png",
      }
    },
    products: {
      Double_Smokey_BBQ_Angus_Burger1: {
        id: 100,
        title: "دوبل اسموکی باربیکیو انگوس برگر",
        description: "Taste the excellence of our tasty burgers and foods, you can customize your meal as you like. Add or remove ingredients, add extras, select special offers.",
        url: "Double_Smokey_BBQ_Angus_Burger1",
        image_small: "/images/special_burgers/1s.png",
        image: ["/images/special_burgers/1.png", "/images/special_burgers/2.png", "/images/special_burgers/3.png"],
        price: 130000,
        star: true,
        disable: false,
        count: 10,
        off: 115000,
        category: 'special_burgers'
      },
      Double_Smokey_BBQ_Angus_Burger2: {
        id: 101,
        title: "برگر اسپایسی آنگوس",
        url: "Double_Smokey_BBQ_Angus_Burger2",
        image_small: "/images/special_burgers/2s.png",
        image: ["/images/special_burgers/2.png", "/images/special_burgers/1.png"],
        price: 250000,
        off: 230000,
        star: false,
        disable: false,
        count: 30,
        category: 'special_burgers'
      },
      Double_Smokey_BBQ_Angus_Burger3: {
        id: 102,
        title: "دودی دودی",
        url: "Double_Smokey_BBQ_Angus_Burger3",
        image_small: "/images/special_burgers/3s.png",
        image: ["/images/special_burgers/3.png"],
        price: 50000,
        star: false,
        disable: false,
        count: 18,
        off: 0,
        category: 'special_burgers'
      },
      Double_Smokey_BBQ_Angus_Burger4: {
        id: 103,
        title: "دوبل اسموکی باربیکیو انگوس برگر",
        url: "Double_Smokey_BBQ_Angus_Burger4",
        image_small: "/images/special_burgers/4s.png",
        image: ["/images/special_burgers/4.png"],
        price: 550000,
        off: 450000,
        star: false,
        disable: false,
        count: 15,
        category: 'special_burgers'
      },
      Double_Smokey_BBQ_Angus_Burger5: {
        id: 104,
        title: "دوبل اسموکی باربیکیو انگوس برگر",
        url: "Double_Smokey_BBQ_Angus_Burger5",
        image_small: "/images/special_burgers/5s.png",
        image: ["/images/special_burgers/5.png"],
        off: 100000,
        price: 90000,
        star: false,
        disable: false,
        count: 10,
        category: 'special_burgers'
      },
      Double_Smokey_BBQ_Angus_Burger6: {
        id: 105,
        title: "دوبل اسموکی باربیکیو انگوس برگر",
        url: "Double_Smokey_BBQ_Angus_Burger6",
        image_small: "/images/special_burgers/6s.png",
        image: ["/images/special_burgers/6.png"],
        price: 80000,
        star: false,
        disable: false,
        count: 1,
        off: 0,
        category: 'special_burgers'
      }
    }
  }
})

export { AtomData, AddProduct, OffBtnAddItemPlus,HeaderName }