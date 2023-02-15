let initialData = {
  products: [
    {
      product_name: "MOBILE : POCO X4 Pro 5G (Laser Black, 128 GB)",
      product_image_url:
        "https://rukminim1.flixcart.com/image/312/312/l19m93k0/mobile/q/f/w/-original-imagcv2dgezfbfet.jpeg?q=70",
      price: 500,
      type:"mobile"
    },
    {
      product_name: "MOBILE : vivo T1 44W (Starry Sky, 128 GB)",
      product_image_url:
        "https://rukminim1.flixcart.com/image/312/312/l2p23rk0/mobile/s/4/3/-original-imagdznhcbdfwfud.jpeg?q=70",
      price: 600,
      type:"mobile"
    },
    {
      product_name:
        "Thomson 9R PRO 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV",
      product_image_url:
        "https://rukminim1.flixcart.com/image/312/312/ku2zjww0/television/w/c/z/43path4545bl-43path4545bl-thomson-original-imag7a88xjj5y2dv.jpeg?q=70",
      price: 700,
      type:"tv"
    },
    {
      product_name:
        "Mi 5A 80 cm (32 inch) HD Ready LED Smart Android TV with Dolby Audio (2022 Model)",
      product_image_url:
        "https://rukminim1.flixcart.com/image/312/312/l2ghgnk0/television/u/a/c/l32m7-5ain-mi-original-imagdsdwqf6bkmkz.jpeg?q=70",
      price: 800,
      type:"tv"
    },
    {
      product_name:
        "HP Pavilion Ryzen 5 Hexa Core AMD R5-5600H - (8 GB/512 GB SSD/Windows 10/4 GB Graphics/NVIDIA GeForce ...",
      product_image_url:
        "https://rukminim1.flixcart.com/image/312/312/kbqu4cw0/computer/q/x/r/hp-original-imaftyzachgrav8f.jpeg?q=70",
      price: 900,
      type:"laptop"
    },
    {
      product_name:
        "Lenovo V15 G2 Core i3 11th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 11 Home) V15 ITL G2 Laptop",
      product_image_url:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/p/s/r/15iml05-thin-and-light-laptop-lenovo-original-imaghnzgqgrguusr.jpeg?q=70",
      price: 1000,
      type:"laptop"
    },
    {
      product_name:
        "SAMSUNG 223 L Direct Cool Single Door 3 Star Refrigerator with Base Drawer  with Digital Inverter",
      product_image_url:
        "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/f/8/6/-original-imagm6w5whn3zend.jpeg?q=70",
      price: 1100,
      type:"others"
    },
  ],
};
const ItemReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADDITEM":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
      case "FILTERITEM":
        return{
          ...state,
          products: action.payload
        }
  }
  return state;
};
export default ItemReducer;
