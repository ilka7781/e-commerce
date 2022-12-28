const GET_REGISTER = 'GET_REGISTER';
const GET_USER_TOKEN = 'GET_USER_TOKEN';
const RESET = 'RESET';
const SELECTED = 'SELECTED';
const ADD_BASKET= 'ADD_BASKET';
const ADD_BASKET_PRODUCTS_ID = 'ADD_BASKET_PRODUCTS_ID';
const ADD_BASKET_PRODUCTS ='ADD_BASKET_PRODUCTS';
const IS_FETCHING ='IS_FETCHING';

const initialState={
    user: [],
    isFetching: false,
    products: [
                {
                    id:1,
                    category: 1,
                    name: 'Iphone 14 white 256GB',
                    img: 'https://ostore.kg/upload/resize_cache/iblock/0eb/220_200_1/0ebfab18ad8195c764a919f126547279.PNG',
                    price: 850,
                    factory: 'Apple',
                    diagonal: '6.1 inch',
                    color: 'white',
                    GPU: '4gb',
                    date: 'september 2021',
                    memory: '4/256gb',
                    guaranty: '12 month',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '12 MP',
                    material: 'Aluminum',
                    screen: '1170 x 2532'
                },
                {
                    id:2,
                    category: 1,
                    name: 'Iphone 14 gray 128GB',
                    img: 'https://ostore.kg/upload/resize_cache/iblock/6ba/220_200_1/6ba09835122a9a3cab932f0f60fc6317.PNG',
                    price: 700,
                    factory: 'Apple',
                    diagonal: '6.1 inch',
                    color: 'gray',
                    GPU: '4gb',
                    date: 'september 2022',
                    memory: '4/128gb',
                    guaranty: '12 month',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '12 MP',
                    material: 'Aluminum',
                    screen: '1170 x 2532'
                },
                {
                    id:3,
                    category: 1,
                    name: 'Iphone 14 plus black 512ГБ',
                    img: 'https://ostore.kg/upload/resize_cache/iblock/ef2/220_200_1/ef24e9de6a20cddd906cb7ea7da4f143.PNG',
                    price: 1000,
                    factory: 'Apple',
                    diagonal: '6.1 inch',
                    color: 'black',
                    GPU: '4gb',
                    date: 'october 2022',
                    memory: '4/512gb',
                    guaranty: '12 month',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '12 MP',
                    material: 'Aluminum',
                    screen: '1170 x 2532'
                },
                {
                    id:4,
                    category: 1,
                    name: 'Iphone 14 plus black 256ГБ',
                    img: 'https://ostore.kg/upload/resize_cache/iblock/382/220_200_1/382a995c3cd59e497b1cc2d6341ba09f.PNG',
                    price: 850,
                    factory: 'Apple',
                    diagonal: '6.1 inch',
                    color: 'black',
                    GPU: '4gb',
                    date: 'october 2021',
                    memory: '4/256gb',
                    guaranty: '12 month',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '12 MP',
                    material: 'Aluminum',
                    screen: '1170 x 2532'
                },
                {
                    id:5,
                    category: 1,
                    name: 'Iphone 13 black 256ГБ',
                    img: 'https://ostore.kg/upload/resize_cache/iblock/91a/220_200_1/91a7b3b1220510b222514dbd2489027a.png',
                    price: 700,
                    factory: 'Apple',
                    diagonal: '6.1 inch',
                    color: 'white',
                    GPU: '4gb',
                    date: 'september 2021',
                    memory: '4/256gb',
                    guaranty: '12 month',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '12 MP',
                    material: 'Aluminum',
                    screen: '1170 x 2532'
                },
                {
                    id:6,
                    category: 1,
                    name: 'Iphone 13 gray 1TB',
                    img: 'https://ostore.kg/upload/resize_cache/iblock/074/220_200_1/07493ba2d0fc0ea8d6f24732240341fe.png',
                    price: 1200,
                    factory: 'Apple',
                    diagonal: '6.1 inch',
                    color: 'white',
                    GPU: '6gb',
                    date: 'september 2021',
                    memory: '6/1TB',
                    guaranty: '12 month',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '12 MP',
                    material: 'Aluminum',
                    screen: '1170 x 2532'
                },                {
                    id:7,
                    category: 1,
                    name: 'Iphone XS white dual sim 256ГБ',
                    img: 'https://ostore.kg/upload/resize_cache/iblock/463/220_200_1/463230c3c7d1ab66d346cb035275eb2b.jpeg',
                    price: 550,
                    factory: 'Apple',
                    diagonal: '6.1 inch',
                    color: 'white',
                    GPU: '4gb',
                    date: 'september 2020',
                    memory: '4/256gb',
                    guaranty: '12 month',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '12 MP',
                    material: 'Aluminum',
                    screen: '1170 x 2532'
                },                {
                    id:8,
                    category: 1,
                    name: 'Iphone 14 white 256ГБ',
                    img: 'https://ostore.kg/upload/resize_cache/iblock/0eb/220_200_1/0ebfab18ad8195c764a919f126547279.PNG',
                    price: 900,
                    factory: 'Apple',
                    diagonal: '6.1 inch',
                    color: 'white',
                    GPU: '4gb',
                    date: 'september 2021',
                    memory: '4/256gb',
                    guaranty: '12 month',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '12 MP',
                    material: 'Aluminum',
                    screen: '1170 x 2532'
                },                {
                    id:9,
                    category: 1,
                    name: 'Iphone XS max black 256ГБ',
                    img: 'https://ostore.kg/upload/resize_cache/iblock/485/220_200_1/1Silver.jpeg',
                    price: 550,
                    factory: 'Apple',
                    diagonal: '6.1 inch',
                    color: 'black',
                    GPU: '4gb',
                    date: 'september 2020',
                    memory: '4/256gb',
                    guaranty: '12 month',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '12 MP',
                    material: 'Aluminum',
                    screen: '1170 x 2532'
                },                {
                    id:10,
                    category: 1,
                    name: 'Iphone 11 black 128GB',
                    img: 'https://ostore.kg/upload/resize_cache/iblock/001/220_200_1/001a338f905c72c5499ab1239a4d34bc.png',
                    price: 500,
                    factory: 'Apple',
                    diagonal: '6.1 inch',
                    color: 'black',
                    GPU: '4gb',
                    date: 'september 2019',
                    memory: '4/128gb',
                    guaranty: '12 month',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '12 MP',
                    material: 'Aluminum',
                    screen: '1170 x 2532'
                },
                {
                    id:11,
                    category:2,
                    name: 'Apple Macbook Pro 14 2021',
                    img: 'https://softech.kg/image/cache/b700869aefecb85a97fd9aaee6610147.jpg',
                    price: 2000,
                    factory: 'Apple',
                    GPU: 'Apple M1 Pro',
                    memory: '16/512 SSD',
                    diagonal: ' 221.2 x 312.6 x 15.5 ',
                    screen: '3024 x 1964',
                    color: 'gray',
                    date: 'September 2021',
                    guaranty: '12 month',
                    camera: '48mp',
                    bluetooth: 'Bluetooth 5.3',
                    material: 'Aluminum'

                },                {
                    id:12,
                    category:2,
                    name: 'Apple Macbook Pro 16 2021',
                    img: 'https://softech.kg/image/cache/690dca1355ba0b497885e5d454e3fc91.jpg',
                    price: 2300,
                    factory: 'Apple',
                    GPU: 'Apple M1 Pro',
                    memory: '16/512 SSD',
                    diagonal: ' 221.2 x 312.6 x 15.5 ',
                    screen: '3024 x 1964',
                    color: 'gray',
                    date: 'September 2021',
                    guaranty: '12 month',
                    camera: '48mp',
                    bluetooth: 'Bluetooth 5.3',
                    material: 'Aluminum'
                },                {
                    id:13,
                    category:2,
                    name: 'Apple Macbook Air 13.3 2020',
                    img: 'https://softech.kg/image/cache/52ebebdbb69017e327d04f256f88fb51.jpg',
                    price: 1000,
                    factory: 'Apple',
                    GPU: 'Apple M2',
                    memory: '8/256 SSD',
                    diagonal: ' 221.2 x 312.6 x 15.5 ',
                    screen: '3024 x 1964',
                    color: 'gray',
                    date: 'September 2020',
                    guaranty: '12 month',
                    camera: '48mp',
                    bluetooth: 'Bluetooth 5.3',
                    material: 'Aluminum'
                },                {
                    id:14,
                    category:2,
                    name: 'Apple Macbook Air 13.6 2022',
                    img: 'https://softech.kg/image/cache/ae4fe860200e6cc4f78bb323e9686048.jpg',
                    price: 2000,
                    factory: 'Apple',
                    GPU: 'Apple M2',
                    memory: '8/512 SSD',
                    diagonal: ' 221.2 x 312.6 x 15.5 ',
                    screen: '3024 x 1964',
                    color: 'gray',
                    date: 'September 2022',
                    guaranty: '12 month',
                    camera: '48mp',
                    bluetooth: 'Bluetooth 5.3',
                    material: 'Aluminum'
                },                {
                    id:15,
                    category:2,
                    name: 'Apple Macbook Air 13.6 2022',
                    img: 'https://softech.kg/image/cache/b700869aefecb85a97fd9aaee6610147.jpg',
                    price: 1800,
                    factory: 'Apple',
                    GPU: 'Apple M2',
                    memory: '8/256 SSD',
                    diagonal: ' 221.2 x 312.6 x 15.5 ',
                    screen: '3024 x 1964',
                    color: 'gray',
                    date: 'September 2022',
                    guaranty: '12 month',
                    camera: '48mp',
                    bluetooth: 'Bluetooth 5.3',
                    material: 'Aluminum'
                },                {
                    id:16,
                    category:2,
                    name: 'Apple Macbook Pro 13.3 2020',
                    img: 'https://softech.kg/image/cache/0183c095721d8de9e96cada545d3e794.jpg',
                    price: 1800,
                    factory: 'Apple',
                    GPU: 'Apple M2',
                    memory: '8/512 SSD',
                    diagonal: ' 221.2 x 312.6 x 15.5 ',
                    screen: '3024 x 1964',
                    color: 'gray',
                    date: 'September 2020',
                    guaranty: '12 month',
                    camera: '48mp',
                    bluetooth: 'Bluetooth 5.3',
                    material: 'Aluminum'
                },                {
                    id:17,
                    category:2,
                    name: 'Apple Macbook Air 13.3 2020',
                    img: 'https://softech.kg/image/cache/6ac63fa27eb76bb5491a83af9b39cf46.jpg',
                    price: 1200,
                    factory: 'Apple',
                    GPU: 'Apple M2',
                    opmemory: '8gb',
                    memory: '512 SSD',
                    diagonal: ' 221.2 x 312.6 x 15.5 ',
                    screen: '3024 x 1964',
                    color: 'gray',
                    date: 'September 2020',
                    guaranty: '12 month',
                    camera: '48mp',
                    bluetooth: 'Bluetooth 5.3',
                    material: 'Aluminum'
                },                {
                    id:18,
                    category:2,
                    name: 'Apple Macbook Air 13.3 2020',
                    img: 'https://softech.kg/image/cache/6ef2202bb7a09f9182986a337ea1419c.jpeg',
                    price: 1100,
                    factory: 'Apple',
                    GPU: 'intel I-core 3',
                    memory: '8/512 SSD',
                    diagonal: ' 221.2 x 312.6 x 15.5 ',
                    screen: '3024 x 1964',
                    color: 'gray',
                    date: 'September 2020',
                    guaranty: '12 month',
                    camera: '48mp',
                    bluetooth: 'Bluetooth 5.3',
                    material: 'Aluminum'
                },

                {
                    id:19,
                    category: 3,
                    name: 'Apple Watch Series 7',
                    img: 'https://softech.kg/image/cache/dbf7bc93d3e016da882e4a0384983ef5.jpg',
                    price: 800,
                    factory: 'Apple',
                    guaranty: '12 month',
                    material: 'Aluminum',
                    screen: '448 x 368',
                    color: 'Gray',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '4mp',
                    GPU: 'MacOS',
                    date: 'October 2022',
                    memory: '4gb',
                    diagonal: '3 inch'


                },                {
                    id:20,
                    category: 3,
                    name: 'Apple Watch Series 8',
                    img: 'https://softech.kg/image/cache/e5913ac2e5f9d99a5c796d3b43fc7b49.jpg',
                    price: 400,
                    factory: 'Apple',
                    guaranty: 'Until 50 mm',
                    material: 'Rubber',
                    screen: '448 x 368',
                    color: 'Gray',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '4mp',
                    GPU: 'MacOS',
                    date: 'October 2022',
                    memory: '4gb',
                    diagonal: '3 inch'
                },                {
                    id:21,
                    category: 3,
                    name: 'Apple Watch Ultra',
                    img: 'https://softech.kg/image/cache/c79c5c92baa36d50a7cdbe344902a2bd.jpg',
                    price: 750,
                    factory: 'Apple',
                    guaranty: 'Until 50 mm',
                    material: 'Leather',
                    screen: '448 x 368',
                    color: 'Gray',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '4mp',
                    GPU: 'MacOS',
                    date: 'October 2022',
                    memory: '4gb',
                    diagonal: '3 inch'
                },                {
                    id:22,
                    category: 3,
                    name: 'Apple Watch Series 5',
                    img: 'https://softech.kg/image/cache/ffa8a5e8d227a6dbaecfd33a993ea260.jpg',
                    price: 400,
                    factory: 'Apple',
                    guaranty: 'Until 30 mm',
                    material: 'Rubber',
                    screen: '448 x 368',
                    color: 'Gray',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '4mp',
                    GPU: 'MacOS',
                    date: 'October 2022',
                    memory: '4gb',
                    diagonal: '3 inch'
                },                {
                    id:23,
                    category: 3,
                    name: 'Apple Watch Series 6',
                    img: 'https://softech.kg/image/cache/4e4dacacde2ae6f3ae56526b8f7ba8a8.jpg',
                    price: 400,
                    factory: 'Apple',
                    guaranty: 'Until 50 mm',
                    material: 'Rubber',
                    screen: '448 x 368',
                    color: 'Gray',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '4mp',
                    GPU: 'MacOS',
                    date: 'October 2022',
                    memory: '4gb',
                    diagonal: '3 inch'
                },                {
                    id:24,
                    category: 3,
                    name: 'Apple Watch Series 8',
                    img: 'https://softech.kg/image/cache/e5913ac2e5f9d99a5c796d3b43fc7b49.jpg',
                    price: 440,
                    factory: 'Apple',
                    guaranty: 'Until 50 mm',
                    material: 'Rubber',
                    screen: '448 x 368',
                    color: 'Gray',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '4mp',
                    GPU: 'MacOS',
                    date: 'October 2022',
                    memory: '4gb',
                    diagonal: '3 inch'
                },                {
                    id:25,
                    category: 3,
                    name: 'Apple Watch Series 7',
                    img: 'https://softech.kg/image/cache/08c4d687e91d240b229dd14324fc549a.jpg',
                    price: 390,
                    factory: 'Apple',
                    guaranty: 'Until 50 mm',
                    material: 'Rubber',
                    screen: '448 x 368',
                    color: 'Gray',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '4mp',
                    GPU: 'MacOS',
                    date: 'October 2022',
                    memory: '4gb',
                    diagonal: '3 inch'
                },                {
                    id:26,
                    category: 3,
                    name: 'Apple Watch Series SE',
                    img: 'https://softech.kg/image/cache/c0871c8532d567150cae95f868ee82d4.jpg',
                    price: 340,
                    factory: 'Apple',
                    guaranty: 'Until 50 mm',
                    material: 'Rubber',
                    screen: '448 x 368',
                    color: 'Gray',
                    bluetooth: 'Bluetooth 5.3',
                    camera: '4mp',
                    GPU: 'MacOS',
                    date: 'October 2022',
                    memory: '4gb',
                    diagonal: '3 inch'
                }
],
    token:[],
    selected:{},
    basket: [],
    basketProductsId: [],
    basketProducts: []
};

export const getRegisterReducer = ( state=initialState, action) =>{
    switch (action.type) {
        case GET_REGISTER:
            return{
                ...state,
                user: action.payload
            }
        case GET_USER_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case RESET:
            return {
                ...state,
                user: [action.payload]
            }
        case SELECTED:
            return {
                ...state,
                selected: action.payload
            }
        case ADD_BASKET:
            return {
                ...state,
                basket: action.payload
            }
        case ADD_BASKET_PRODUCTS_ID:
            return {
                ...state,
                basketProductsId: action.payload
            }
        case ADD_BASKET_PRODUCTS:
            return {
                ...state,
                basketProducts: action.payload
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}


export const getRegisterTokenAction = (userToken) => ({type: GET_USER_TOKEN, payload: userToken});
export const getRegisterAction = (userData) => ({type: GET_REGISTER, payload: userData});
export const resetAction = (data) => ({type: RESET, payload: data});
export const selectedAction = (productData) => ({type: SELECTED, payload: productData});
export const addToBasketAction = (productData) => ({type: ADD_BASKET, payload: productData});
export const addToBasketProductsIdAction = (bpData) => ({type: ADD_BASKET_PRODUCTS_ID, payload: bpData});
export const addToBasketProductsAction = (bpData) => ({type: ADD_BASKET_PRODUCTS, payload: bpData});
export const isFetchingAction = (f) => ({type: IS_FETCHING, payload: f});