import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [
  {
    id: "1",
    title: "Okuyucunun Beklentilerini Karşılayın",
    content:
      "İyi blog yazısı örnekleri her zaman yararlı içeriklerden oluşur. Burada amaç, kullanıcıda doyum sağlamak ve onun sorularına cevap bulabilmektir. Yani siz okuyucunuza ne kadar değer verir ve ne kadar kaliteli bir içerik kaleme alırsanız, arama motorlarından da o kadar ilgi görür; üst sıralara o kadar hızlı çıkarsınız. Eğer içeriğimize baştan sona göz attıysanız artık blog sayfalarınız için ihtiyacınız olan her şeyi biliyorsunuz demektir. Unutmayın ki önemli olan her zaman kullanıcılardır ve arama motoru algoritmaları her zaman kullanıcı ihtiyaç ve taleplerini göz önünde bulundurur. Siz de dijital dünyanın içerisinde blog yazılarınızla görünür olmak istiyorsanız okuyucunuza değer vermelisiniz. Bu değeri de elbette oluşturduğunuz içeriklere yansıtmalısınız. Ayrıca bizden tavsiye farklı içerik kanallarını bir arada kullanmak size çoğu zaman avantaj sağlar. Buna örnek olarak blog sayfanız ile bir Instagram hesabınızın ya da YouTube kanalınızın olmasını örnek verebiliriz.",
  },
];

app.get("/", function (req, res) {
  res.render("index.ejs", {
    posts,
  });
});

app.post("/create-a-post", function (req, res) {
  posts.push({ ...req.body, id: crypto.randomUUID() });
  res.redirect("/");
});

app.post("/edit-a-post", function (req, res) {
  const { id, title, content } = req.body;
  const index = posts.findIndex((post) => post.id === id);
  if (index !== -1) {
    posts[index] = { ...posts[index], title, content };
    res.redirect("/");
  } else {
    res.status(404).send("Post not found");
  }
});

app.listen(port, function () {
  console.log(`Listening port is ${port}`);
});
