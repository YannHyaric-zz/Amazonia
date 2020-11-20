const data = {
  products: [
    {
      _id: "1",
      name: "Harry Potter",
      category: "Livro",
      image: "/images/product1.jpg",
      price: "R$" + 30,
      pricecut: 0,
      brand: "Marca",
      rating: 5,
      numReviews: 10,
      description: "capa dura",
    },
    {
      _id: "2",
      name: "A.C. Valhalla",
      category: "Jogo",
      image: "/images/product2.jpg",
      price: "R$" + 70,
      brand: "Sony",
      rating: 4.5,
      numReviews: 15,
      description: "PS4 Game",
      promo: 65,
      pricecut: (
        <span>
          <s>R$70.00</s>
          <span> R$65.00</span>
        </span>
      ),
    },
    {
      _id: "3",
      name: "Headset X",
      category: "Eletronicos",
      image: "/images/product3.jpg",
      price: "R$" + 35,
      brand: "X",
      rating: 3,
      numReviews: 12,
      description: "headset da marca X",
      pricecut: (
        <span>
          <s>R$70.00</s>
          <span> R$65.00</span>
        </span>
      ),
    },
    {
      _id: "4",
      name: "Morro dos Ventos Uivantes",
      category: "Livro",
      image: "/images/product4.jpg",
      price: "R$" + 30,
      brand: "Martin Claret",
      rating: 5,
      numReviews: 9,
      description: "usado",
      pricecut: (
        <span>
          <s>60.00</s>
          <span> 59.99</span>
        </span>
      ),
    },
    {
      _id: "5",
      name: "God of War",
      category: "Jogo",
      image: "/images/product5.jpg",
      price: "R$" + 100,
      brand: "Sony",
      rating: 4,
      numReviews: 10,
      description: "capa dura",
      pricecut: 0,
    },
    {
      _id: "6",
      name: "DUNA",
      category: "Livro",
      image: "/images/product6.jpg",
      price: "R$" + 80,
      brand: "Frank Herbert",
      rating: 3.5,
      numReviews: 18,
      description: "capa dura",
      pricecut: 0,
    },
    {
      _id: "7",
      name: "Demon Souls",
      category: "Livro",
      image: "/images/product7.jpg",
      price: "R$" + 79.99,
      brand: "PS",
      rating: 4,
      numReviews: 20,
      description: "capa dura",
      pricecut: 0,
    },
    {
      _id: "8",
      name: "Mouse Y",
      category: "Eletronicos",
      image: "/images/product8.jpg",
      price: "R$" + 10,
      brand: "Y",
      rating: 1.5,
      numReviews: 1,
      description: "mouse marca Y",
      pricecut: 0,
    },
    {
      _id: "9",
      name: "Kindle Z",
      category: "Eletronicos",
      image: "/images/product9.jpg",
      price: "R$" + 65,
      brand: "Z",
      rating: 4,
      numReviews: 8,
      description: "Kindel Marca Z",
      pricecut: 0,
    },
    {
      _id: "10",
      name: "Harry Potter",
      category: "Livro",
      image: "/images/product1.jpg",
      price: "R$" + 0,
      brand: "Marca",
      rating: 5,
      numReviews: 10,
      description: "capa dura",
      pricecut: 0,
    },
  ],
};
export default data;
