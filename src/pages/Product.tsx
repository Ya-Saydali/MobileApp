import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonItem,
    IonLabel,
    IonIcon,
    IonThumbnail,
    IonImg,
    IonButton,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonInput,
    IonCheckbox,
    IonToggle,
    IonSelectOption,
    IonSelect,
    IonDatetime,
    IonAvatar,
    IonList,
    IonText,
    IonRange,
    IonButtons, IonBackButton
} from '@ionic/react';
import './Home.css';
import {wifi, checkmarkCircle, shuffle, closeCircle, cart} from 'ionicons/icons';
const Product: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Acamol - أكامول (باراسيتامول)</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton text={"رجوع"}/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Acamol - أكامول (باراسيتامول)</IonTitle>
                        <IonButtons slot="start">
                            <IonBackButton text={"رجوع"}/>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonCard>
                    <IonImg src={"http://pps.ps/post-image/13"}></IonImg>

                    <IonCardContent>
                        <IonButton expand="block">
                            <IonIcon slot="start" icon={cart} />
                            شراء
                        </IonButton>
                        <IonItem lines="none">
                            <IonLabel>
                                أسماء تجارية
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel className="ion-text-wrap">
                                برول / أبرولاط / أبرولاط فورطه/ الدولور/ أبرلجان/ أكامول/ أكامولي/ أكامولي فورطة/ دكسامول/ دكسامول كيد/ نيمولي/ فيمولي/ تبتيبوت نوبيمول/ سوبرمول/ سوبرمول M  / فارامول/ فرست اليكسير/ روكامول
                            </IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                            <IonLabel>
                                كيفية التناول
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel className="ion-text-wrap">
                                حبوب، حبوب حبوب للتذويب، شراب، شمع، معلق مركز للبلع.
                            </IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                            <IonLabel>
                                الفعالية الطبية
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel className="ion-text-wrap">
                                باراتستامول هو دواء مخصص لتخفيف الآلام ولخفض الحرارة.باراتستامول يعيق إنزيم تسيكلواوكسيجناز في الجهاز العصبي المركزي، ويعمل على خفض الحرارة وتخفيف الألم عن طريق إعاقة إنزيم بروسطجلندين سينططاز
                            </IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                            <IonLabel>
                                أمور من المهم معرفتها
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel className="ion-text-wrap">
                                <ul>
                                    <li>باراتستامول هو دواء لتخفيف الآلام ولخفض الحرارة للأطفال وللأولاد وللبالغين</li>
                                    <li>يمنع استعمال الدواء في حال وجود حساسية مفرطة من باراتسطامول</li>
                                    <li>باراتسطامول هو دواء آمن نسبيا أيضا في فترة الحمل والرضاعة.الجرعة الزائدة قد تضر الكبد</li>
                                    <li>الجرعة المقبولة للبالغين هي 0.5-1 غرام .أربع حتى ثلاث مرات في اليوم.يمنع أخذ أكثر من 4 غرام في اليوم. لتفصيل الجرعات حسب العمر والوزن أنظر فقرة "الجرعة المناسبة"</li>
                                    <li>يجب الانتباه لنسبة الباراتسطامول في أدوية أخرى من عدم اجتياز الجرعات القصوى المسموحة في اليوم</li>
                                </ul>
                            </IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                            <IonLabel>
                                الأعراض الجانبية الشائعة  في الجرعات العادية
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel className="ion-text-wrap">
                                باراتستامول هو دواء آمن نسبيا. في حالات نادرة قد يحصل طفح جلدي كعرض مرافق للدواء.في الاستعمال طويل الأمد قد تحدث أعراض جانبية دموية: قلة الصفيحات، انخفاض في عدد خلايا الدم البيضاء، انخفاض في عدد خلايا الدم الحمراء، انخفاض في عدد بعض أنواع خلايا الدم البيضاء.
                            </IonLabel>
                        </IonItem>






                    </IonCardContent>
                </IonCard>


            </IonContent>
        </IonPage>
    );
};

export default Product;
