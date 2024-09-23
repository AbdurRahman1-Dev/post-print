
import { Card, CardContent } from "@/components/ui/card"

import Title from "../shared/Title";

const products = [
  { id: 1, name: "Product 1", price: "$19.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fsinalite.com%2Fmedia%2Fimages%2Flinen-pc-cards.png&w=384&q=75" },
  { id: 2, name: "Product 2", price: "$29.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F564x%2F09%2F57%2F55%2F095755256345365d22ca7180d3c9cecc.jpg&w=750&q=75" },
  { id: 3, name: "Product 3", price: "$39.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F99%2F0e%2F24990e361c34b45ca0f32133ee043d47.jpg&w=384&q=75" },
  { id: 4, name: "Product 4", price: "$49.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2Fd4%2F39%2Fbb%2Fd439bbd73a3ef215e9401eec618fd1db.jpg&w=384&q=75" },
  { id: 5, name: "Product 5", price: "$59.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2F36%2Fd6%2F81%2F36d6816ebec8a8ca182bdc57a18dadc5.jpg&w=384&q=75" },

  { id: 6, name: "Product 6", price: "$59.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2F87%2Fea%2F39%2F87ea397f4600215f9200dac3d825ee0f.jpg&w=384&q=75" }, { id: 7, name: "Product 6", price: "$59.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2F47%2Fbb%2F8b%2F47bb8b1f1b999762f7c4f00145007d01.jpg&w=384&q=75" }, { id: 8, name: "Product 6", price: "$59.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2Fbd%2F5b%2Fae%2Fbd5baebd0169b35bb937223d9805054e.jpg&w=384&q=75" }, { id: 9, name: "Product 6", price: "$59.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffa%2F56%2Fd4%2Ffa56d48922e72bdeb42d6985df517f1e.jpg&w=384&q=75" }, { id: 10, name: "Product 6", price: "$59.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffa%2F56%2Fd4%2Ffa56d48922e72bdeb42d6985df517f1e.jpg&w=384&q=75" }, { id: 11, name: "Product 6", price: "$59.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffa%2F56%2Fd4%2Ffa56d48922e72bdeb42d6985df517f1e.jpg&w=384&q=75" },
  { id: 12, name: "Product 6", price: "$59.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffa%2F56%2Fd4%2Ffa56d48922e72bdeb42d6985df517f1e.jpg&w=384&q=75" },

  // { id: 13, name: "Product 6", price: "$59.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffa%2F56%2Fd4%2Ffa56d48922e72bdeb42d6985df517f1e.jpg&w=384&q=75" },

  // { id: 14, name: "Product 6", price: "$59.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffa%2F56%2Fd4%2Ffa56d48922e72bdeb42d6985df517f1e.jpg&w=384&q=75" }, { id: 15, name: "Product 6", price: "$59.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffa%2F56%2Fd4%2Ffa56d48922e72bdeb42d6985df517f1e.jpg&w=384&q=75" }, { id: 16, name: "Product 6", price: "$59.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffa%2F56%2Fd4%2Ffa56d48922e72bdeb42d6985df517f1e.jpg&w=384&q=75" },
];

const PopularProducts = () => {
  return (
    <section className="container mx-auto px-4 w-full">
      <div className="px-2">
        <Title title="Popular Products" />
        <div className="grid grid-cols-4 gap-5">
          {products.map((product, i) => (
            <Card className='shadow-sm' key={product.id} >
              <CardContent className="flex aspect-square items-center justify-center p-2">
                <div className="text-center">
                  <img src={product.image} alt={product.name} className="w-full h-auto" />
                  <h3 className="font-semibold pb-3 pt-1">{`Product ${i + 1}`}</h3>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;