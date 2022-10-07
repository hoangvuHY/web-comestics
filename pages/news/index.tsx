import NewsItem from "~/components/News/NewsItem";
import new1 from "~/assets/image/new1.png";
import new2 from "~/assets/image/news2.jpg";
import { useRouter } from "next/router";
import { StaticImageData } from "next/image";

export interface PostItem {
  id: number;
  title: string;
  thumbnail: StaticImageData;
}

const News = () => {
  const router = useRouter();
  const listPost: PostItem[] = [
    {
      id: 1,
      title: "KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ VIÊM NANG LÔNG LIGI",
      thumbnail: new1,
    },
    {
      id: 2,
      title: "KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ VIÊM NANG LÔNG LIGI",
      thumbnail: new2,
    },
    {
      id: 3,
      title: "KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ VIÊM NANG LÔNG LIGI",
      thumbnail: new1,
    },
    {
      id: 4,
      title: "KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ VIÊM NANG LÔNG LIGI",
      thumbnail: new1,
    },
    {
      id: 5,
      title: "KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ VIÊM NANG LÔNG LIGI",
      thumbnail: new1,
    },
    {
      id: 6,
      title: "KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ VIÊM NANG LÔNG LIGI",
      thumbnail: new1,
    },
    {
      id: 7,
      title: "KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ VIÊM NANG LÔNG LIGI",
      thumbnail: new1,
    },
  ];
  const getListPostComponent = () => {
    return listPost.map((item) => (
      <NewsItem
        key={item.id}
        title={item.title}
        thumbnail={item.thumbnail}
      ></NewsItem>
    ));
  };
  const listPostComponent = getListPostComponent();
  const toNewsPage = () => {
    router.push("/news");
  };
  return (
    <div>
      <div className={`row d-flex justify-content-center h1`}>
        TIN TỨC - SỰ KIỆN
      </div>
      <div className={`row p-2 p-md-5`}>{listPostComponent}</div>
    </div>
  );
};
export default News;
