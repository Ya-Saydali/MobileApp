import React  from 'react';
import {
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonSelect,
    IonSelectOption,
    IonPage,
    IonItemDivider,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonInput,
    IonTextarea,
    IonRow,
    IonCol,
    IonButton, IonButtons, IonBackButton
} from '@ionic/react';
const Profile: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>معلوماتي الشخصيه</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton text={"رجوع"}/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">حسابي</IonTitle>
                        <IonButtons slot="start">
                            <IonBackButton text={"رجوع"}/>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonList>
                    <IonItem>
                        <IonLabel position="fixed">الاسم</IonLabel>
                        <IonInput value={"صلاح يحيى"} ></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="fixed">رقم المحمول</IonLabel>
                        <IonInput value={"0599825671"} ></IonInput>
                    </IonItem>

                     <IonItem>
                        <IonLabel position="fixed">تاريخ الميلاد</IonLabel>
                        <IonInput type="date" value={"1989-01-02"} ></IonInput>
                    </IonItem>

                   <IonItem>
                      <IonLabel position="fixed">الجنس</IonLabel>
                       <IonSelect value={"male"}>
                           <IonSelectOption  value="female">انثى</IonSelectOption>
                           <IonSelectOption value="male">ذكر</IonSelectOption>
                       </IonSelect>
                   </IonItem>

                    <IonItem>
                        <IonLabel position={"fixed"}>العنوان</IonLabel>
                        <IonTextarea value={"شارع الارسال الحي الثاني عماره 5"}></IonTextarea>
                    </IonItem>


                    <IonRow>
                        <IonCol>
                            <IonItem>
                            <IonLabel position="fixed">الطول بالسم</IonLabel>
                            <IonInput value={"177"} ></IonInput>
                        </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="fixed">الوزن بالكيلو</IonLabel>
                                <IonInput value={"78"} ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                            <IonLabel position="fixed">نوعيه الدم</IonLabel>
                            <IonInput value={"A+"} ></IonInput>
                        </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="fixed">العمر</IonLabel>
                                <IonInput value={"31"} ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>





                </IonList>
                <IonButton routerLink={"/profile"} size="large" expand="block">حفظ</IonButton>


            </IonContent>
        </IonPage>
    );
};

export default Profile;
