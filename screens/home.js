import { View, Text, StyleSheet, Button, TouchableOpacity, Modal, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useState } from 'react';
import { FlatList } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from "formik";
import * as Yup from 'yup';

export default function Home({ navigation }) {
    const [review, setReview] = useState([
        { title: 'zelda,breath of air', rating: 5, body: 'lorem ipsum', image: require('../assets/fonts/rating-1.png'), key: '1' },
        { title: 'zelda,breath of air', rating: 5, body: 'lorem ipsum', image: require('../assets/fonts/rating-2.png'), key: '2' },
        { title: 'zelda,breath of air', rating: 5, body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius obcaecati, laudantium fuga facere aperiam deleniti expedita voluptas velit neque, quasi officia. Sit fugiat odit eum laboriosam optio ea quos!', image: require('../assets/fonts/rating-3.png'), key: '3' },
    ])

    const [modalopen, setModelopen] = useState(false)
    const handlePress = () => {
        setModelopen(!modalopen)
    }


    const handleSubmit = (values, action) => {
        const newreview = {
            ...values, key: Math.random().toString()
        }
        setReview((prev) => {
            return [
                newreview, ...prev
            ]
        })
        action.resetForm()
        setModelopen(false)
    }

    const SignupSchema = Yup.object().shape({
        title: Yup.string()
            .min(5, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
    })

    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={handlePress}><MaterialIcons name="add" size={38} color="black" style={{ marginBottom: 30 }} /></TouchableOpacity>

            <Modal visible={modalopen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={handlePress}><MaterialIcons name="close" size={38} color="black" style={{ marginBottom: 30 }} /></TouchableOpacity>
                        </View>
                        <Text style={{ textAlign: 'center', fontSize: 28, color: 'grey' }}>Add Review</Text>

                        <View style={styles.formik}>
                            <Formik
                                initialValues={{ title: '', body: '', rating: '' }}
                                onSubmit={handleSubmit}
                                validationSchema={SignupSchema}
                            >
                                {({ handleChange, handleBlur, handleSubmit,errors,touched, values }) => (
                                    <View>
                                        <TextInput
                                            onChangeText={handleChange('title')}
                                            onBlur={handleBlur('title')}
                                            placeholder="Review title"
                                            value={values.title}
                                            style={styles.input}
                                        />
                                        {errors.title && touched.title ? (
                                            <Text style={styles.errorText}>{errors.title}</Text>
                                        ) : null}

                                        <TextInput
                                            multiline
                                            onChangeText={handleChange('body')}
                                            onBlur={handleBlur('body')}
                                            placeholder="Review body"
                                            value={values.body}
                                            style={styles.input}
                                        />
                                        <TextInput
                                            onChangeText={handleChange('rating')}
                                            onBlur={handleBlur('rating')}
                                            placeholder="rating (1-5)"
                                            value={values.rating}
                                            style={styles.input}
                                            keyboardType="numeric"
                                        />
                                        <Button title="submit" onPress={handleSubmit} />
                                    </View>

                                )}
                            </Formik>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <FlatList
                data={review}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetail', item)}>
                        <Text style={styles.text}>{item.title}</Text>
                    </TouchableOpacity>

                )}
            />

            <Button
                title="Go to About"
                onPress={() => navigation.navigate('settings')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    text: {
        padding: 20,
        margin: 20,
        borderWidth: 1,
        width: 300,
        textAlign: 'center',
        fontSize: 23,
        borderColor: '#ddd'
    },
    formik: {
        paddingHorizontal: 30
    },
    input: {
        padding: 20,
        borderCurve: 20,
},
errorText:{
    paddingLeft:20,
    color:'red'
}
});

