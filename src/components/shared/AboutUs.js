import React from "react";
import {Link} from "react-router-dom";

const AboutUs = () => {
    return (
        <div>
            <div>
                <h2>درباره ما</h2>
                <h4>
                    اسمارت شاپ را به چه می شناسید؟ اگر بخواهید یک خرید آنلاین انجام دهید اول از همه به کجا سر می زنید؟
                    ما کارمان را از فروش ساده کالاهای الکترونیک و دیجیتال شروع کردیم اما حالا بعد از 10 سال و اضافه شدن
                    بازوهای جدید به گروه اسمارت شاپ تلاش می‌کنیم با همراهی شما بهترین پلتفرم تجارت الکترونیک در خارمیانه
                    باشیم. برای تحقق این مأموریت به لبخند شما و ارزش‌هایی الهام بخش باور داریم</h4>
            </div>
            <div>
                <h2>هویت ما</h2>
                <h4>
                    چه فروشنده اسمارت شاپ باشید، چه خریدار، اسمارت شاپ هویت خود را از شما وام گرفته است. آیا می‌دانید ما
                    چه چشم‌انداز و مأموریتی داریم و برای رسیدن به آنها چطور گام بر می‌داریم؟
                </h4>
                <Link to="#">بیشتر بخوانید</Link>
            </div>
            <div>
                <h2>تاریخچه اسمارت شاپ</h2>
                <h4>
                    داستان فراز و فرودهای اسمارت شاپ پر از تجربه، چالش و یادگیری ست، از گسترش تیم اسمارت شاپ به هزاران
                    نفر
                    تا راه اندازی سرویس‌های جدید که همگی در کنار هم اسمارت شاپ را به یک برند ملی، باهوش و فناوری محور
                    تبدیل می‌کنند.</h4>
                <Link to="#">بیشتر بخوانید</Link>
            </div>
            <div>
                <h2>گروه اسمارت شاپ</h2>
                <h4> تجارت الکترونیک بر پایه تکنولوژی، هسته اصلی فعالیت اسمارت شاپ است اما آنچه اکنون جوهره گروه اسمارت
                    شاپ
                    را تشکیل می‌دهد اشتیاق و دغدغه برای خلق ارزش و کمک به توسعه اقتصاد دیجیتال در ایران است.</h4>
                <Link to="#">بیشتر بخوانید</Link>
            </div>
        </div>
    )
}

export default AboutUs;