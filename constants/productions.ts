import { E_SORT_PRODUCTION } from "~/enum/production";

export const sortFilterArrays = [
  {
    key: E_SORT_PRODUCTION.NEWEST,
    value: 'Mới nhất'
  },
  {
    key: E_SORT_PRODUCTION.BEST_SELL,
    value: 'Bán chạy'
  },
  {
    key: E_SORT_PRODUCTION.LOW_TO_HIGH,
    value: 'Giá thấp đến cao'
  },
  {
    key: E_SORT_PRODUCTION.HIGH_TO_LOW,
    value: 'Giá cao đến thấp'
  },
]

export const OptionCountProduction = [
  {
    key: 5,
    value: 'Hiển thị 20'
  },
  {
    key: 10,
    value: 'Hiển thị 40'
  },
]
