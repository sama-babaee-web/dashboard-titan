import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: ' داشبورد ', image: iconsImgs.home },
    // { id: 2, title: 'Budget', image: iconsImgs.budget },
    { id: 3, title: 'معاملات', image: iconsImgs.plane },
    { id: 4, title: 'اشتراک ها', image: iconsImgs.wallet },
    { id: 5, title: 'وام', image: iconsImgs.bills },
    { id: 6, title: 'گزارش ها', image: iconsImgs.report },
    { id: 7, title: 'پس انداز', image: iconsImgs.wallet },
    { id: 8, title: 'مشاوره مالی', image: iconsImgs.wealth },
    { id: 9, title: 'حسابداری', image: iconsImgs.user },
    { id: 10, title: 'تنظیمات', image: iconsImgs.gears }
];

export const transactions = [
    {
        id: 11, 
        name: " ابراهیم براتی ",
        image: personsImgs.person_four,
        date: "1402/08/20",
        amount: 22000
    },
    {
        id: 12, 
        name: "رضا میردار",
        image: personsImgs.person_three,
        date: "1402/08/20",
        amount: 20000
    },
    {
        id: 13, 
        name: " سما بابایی ",
        image: personsImgs.person_two,
        date: "1402/08/20",
        amount: 30000
    }
];

export const reportData = [
    {
        id: 14,
        month: "فروردین",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "اردیبهشت",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "خرداد",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "تیر",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "مرداد",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "اشتراک ها",
        type: "خودکار",
        amount: 22000
    },
    {
        id: 20, 
        title: "پرداخت وام",
        type: "خودکار",
        amount: 16000
    },
    {
        id: 21, 
        title: "مواد غذایی",
        type: "خودکار",
        amount: 20000
    },
    {
        id: 22, 
        title: "اشتراک ها",
        type: null,
        amount: 10000
    },
    {
        id: 23, 
        title: "اشتراک ها",
        type: null,
        amount: 40000
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: 20000
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "23/12/10",
        amount: 5000
    },
    {
        id: 26,
        title: "DSTV",
        due_date: "23/12/22",
        amount: 2000
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 250000,
        title: "هزینه ها را پرداخت کنید",
        date_taken: "1402/04/06",
        amount_left: 400000
    }
]