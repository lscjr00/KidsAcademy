import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return ( 
    <View style={styles.bgColor}>
      <Image style={styles.tinyLogo} source={{uri:'https://imgur.com/bF8rSQ6.png'}}/>
      <Text style={styles.appName}>KIDS ACADEMY</Text>
  
      <View> 
      <Text> USERNAME</Text>
      <TextInput style={styles.loginInput} placeholder=" Username"/>
      <Text> PASSWORD</Text>
      <TextInput style={styles.loginInput} secureTextEntry={true} placeholder=" Password"/>
      <Text></Text>
      </View>
      
      <TouchableOpacity style={styles.button} color="#f45e71"  onPress={() => navigation.navigate('Home')}>
        <Text  style={styles.buttonText}> Log in </Text>
      </TouchableOpacity>
    
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
   </View>
  );
}





function SignUp({ navigation }) {
  return (
    
     <View style={styles.bgColor}>
      <View> 
        <Image style={styles.tinyLogo} source={{uri:'https://imgur.com/bF8rSQ6.png'}}/>
        <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>Welcome,</Text>
        <Text style={{fontSize: 18,textAlign: 'center'}}>Sign Up to continue</Text>
        <Text></Text>
        <Text style={styles.signinText}>First Name:</Text>
        <TextInput style={styles.signupinputstyle} placeholder=" First Name"/>
        <Text style={styles.signinText}>Last Name:</Text>
        <TextInput style={styles.signupinputstyle} placeholder=" Last Name"/>
        <Text style={styles.signinText}>Email:</Text>
        <TextInput style={styles.signupinputstyle} placeholder=" Email"/>
        <Text style={styles.signinText}>Password:</Text>
        <TextInput style={styles.signupinputstyle}secureTextEntry={true} placeholder=" Password"/>
        <Text style={styles.signinText}>Confirm Password:</Text>
        <TextInput style={styles.signupinputstyle}secureTextEntry={true} placeholder=" Confirm Password"/>
      </View>
        <TouchableOpacity style={styles.button} color="#f45e71" onPress={() => navigation.navigate('Login')}>
          <Text  style={styles.buttonText}> Sign Up </Text>
        </TouchableOpacity>
    </View>
  );
}




function Home({ navigation }) {
  return (
     <View style={styles.bgColor}>
      <Image style={styles.tinyLogo} source={{uri:'https://imgur.com/bF8rSQ6.png' }}/>
      <Text></Text>
      <Text style={styles.t1}>Our Learning Library</Text>
      <Text  style={styles.t2} >Digital and printable resources, kids can learn about any topic they’re curious about. </Text>
      <Text></Text>

      <Text style={styles.t3}> Worksheets </Text>
       <Text style={styles.t2} > What does your student want to learn? We’ve got a worksheet for that! Our printables are a fun and easy way to learn about multiplication, sight words, animal life cycles, and much more! </Text> 
        <TouchableOpacity style={styles.button1} color="#f45e71" onPress={() => navigation.navigate('WorkSheets')}   >
        <Text  style={styles.buttonText1}> Explore and Print </Text>
       </TouchableOpacity>
      
      <Text></Text>
      <Text style={styles.t3}>Our Solution for Schools, Districts, and Organizations </Text>
      <Text style={styles.t2} >Our easy-to-use, comprehensive, and secure supplemental digital learning program empowers administrators and teachers to help PreK-7 students build essential skills and excel in math and reading. </Text>
     
      <TouchableOpacity style={styles.button1} color="#f45e71" onPress={() => navigation.navigate('AboutUs')}   >
        <Text  style={styles.buttonText1}> Explore Now </Text>
      </TouchableOpacity>
    </View>
  );
}





function AboutUs({ navigation }) {
  return (
<View style={styles.bgColor}>
<Text style={styles.t1}>About Us</Text>
<Text style={styles.t2,{fontWeight:'bold'}}>Enrich, Support and Extend Learning</Text>
<Text style={styles.t2} > Kids academy online learning program empowers teachers to help students build essential skills and excel in math and reading. </Text>

<Text style={styles.tb1}>Blended Learning</Text>
<Text style={styles.tb2} > Supercharge your blended learning program with engaging online math and reading games for your students, motivating them to be active participants in their learning. </Text>

<Text style={styles.t3}>Progress Tracker</Text>
<Text style={styles.t2} > Empower teachers with concise and actionable learning data through the Progress Tracker, allowing them to quickly identify areas for enrichment and reteaching. </Text>

<Text style={styles.tb1}>Administrator Reports</Text>
<Text style={styles.tb2} > Equip administrators with classroom level performance data and product adoption information to gauge program effectiveness. </Text>

<Text></Text>

<Text style={styles.t3}>Why worksheets and workbooks?</Text>
<Text style={styles.t4}>•For learning and practicing some skills, we believe a pencil and paper offers unique advantages. </Text>
<Text style={styles.t4}>•First and foremost, working on paper encourages children to slow down, read and think.  In contrast, the way we have learned to use screens promotes scanning, guessing and tapping.</Text>
<Text style={styles.t4}>•Completed worksheets also leave a trail of work, instantly comprehensible to a parent, tutor or teacher.</Text>
<Text style={styles.t4}>•We recommend that students take a balanced approach combining paper based learning with online programs. </Text>
      <TouchableOpacity style={styles.button1} color="#f45e71" onPress={() => navigation.navigate('Mission')}   >
        <Text  style={styles.buttonText1}> Company Mission </Text>
       </TouchableOpacity>
      
</View>
  );
}

function Mission({ navigation }) {
  return (
<View style={styles.bgColor}>
<Image style={styles.mLogo2} source={{uri:'https://imgur.com/7bPMxJH.png' }}/>

<Text style={styles.t1}>{"\n"}Our mission</Text>
<Text style={styles.t2} > Nurture each child’s passion, curiosity, optimism, and educational success. </Text>
<Text></Text>
<Text style={styles.tb1}>Our philosophy</Text>
<Text style={styles.tb7}>Proven learning approaches</Text>
<Text style={styles.tb2} > Teaching is one of the most challenging and complex jobs on the planet. Our digital resources, tools, and learning materials are developed by educational experts to incorporate leading pedagogical practices. They are useful in any type of teaching moment and many can be used to support national education standards. </Text>

<Text style={styles.t6}>Empowered educators</Text>
<Text style={styles.t2} > From school teachers and tutors to home schoolers and parents, engaged adults are the key to unlocking each child's potential and drive to learn. We empower all kinds of educators to teach kids by providing the best educational resources in any form or device to be used at home, at school, and everywhere in-between. </Text>

<Text style={styles.tb7}>Unique experiences</Text>
<Text style={styles.tb2} > There is no such thing as "one size fits all" in education; each educator and child has unique challenges and goals. We celebrate the diversity of our users by offering differentiated resources that can meet a wide range of educational needs - and raise kids' confidence in learning. </Text>

</View>
  );
}






function WorkSheets({ navigation }) {
  return (
    <View style={styles.bgColor}>
    <Text style={styles.t5}>Worksheets and Printables for Kids</Text>
    <Image style={styles.tinyLogo} source={{uri:'https://imgur.com/5rzsWnN.png' }}/>
    <Text style={styles.t2} > Whether your child needs a little math boost or is interested in learning more about the solar system, our worksheets and printable activities cover all the educational bases. Each worksheet was created by a professional educator, so you know your child will learn critical age-appropriate facts and concepts.</Text>
     
          
          <TouchableOpacity style={styles.button1} color="#f45e71" onPress={() => navigation.navigate('Alphabet')}>
            <Text  style={styles.buttonText}> ALPHABET </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1} color="#f45e71" onPress={() => navigation.navigate('Numbers')}>
            <Text  style={styles.buttonText}> NUMBERS </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1} color="#f45e71" onPress={() => navigation.navigate('Shapes')}>
            <Text  style={styles.buttonText}> SHAPES </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1} color="#f45e71" onPress={() => navigation.navigate('Colors')}>
            <Text  style={styles.buttonText}> COLORS </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1} color="#f45e71" onPress={() => navigation.navigate('LivingThings')}>
            <Text  style={styles.buttonText2}> LIVING THINGS </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1} color="#f45e71" onPress={() => navigation.navigate('HumanBody')}>
           <Text  style={styles.buttonText3}> HUMAN BODY</Text>
          </TouchableOpacity>
   </View>
  );
}






function Alphabet({ navigation }) {
  return (
<View style={styles.bgColor}>

<Text style={styles.t5}>ALPHABET</Text>
<Image style={styles.aimage} source={{uri:'https://imgur.com/h9sx21J.png' }}/>

<Text style={styles.t3}>Letters and Alphabet Worksheets</Text>
<Text style={styles.t2}> Recognizing letters and practicing to print letters is a fundamental start to learning to read and write. These worksheets help your kids learn to recognize and write letters in both lower and upper case. The alphabet and alphabetical order is also covered in this section. </Text>
<Text></Text>
        <ScrollView>
          <Text style={styles.tb3}>Tracing Leters Worksheets </Text>
          <Text style={styles.tb2}> Once students can trace, copy and write lines and patterns, they are ready to learn to form letters. The first step is to trace letters.  We provide a set of 26 tracing letter worksheets, each with both upper case and lower case letters, that will help your kids build their penmanship skills.</Text>
            <Button
              onPress={() => Alert.alert('Successfully Downloaded Trace upper and lower case letters worksheets')}
              title="Download Trace upper and lower case letters worksheets"
              color="#f45e71"
             />

         <Text></Text>
          <Text style={styles.t6}> Upper and lower case Letter worksheets</Text>
          <Text style={styles.t2}>Upper case letters, also referred to as capital letters, and lower case letters, also known as small letters, in some cases look similar (O and o) but quite different in other cases (D and d). These kindergarten worksheets give kids practice in matching upper case to lower case letters, and vice versa. Instant recognition of the different case forms of each letter is an important early reading skill.</Text>
            <Button
            onPress={() => Alert.alert('Successfully Downloaded Upper and lower case Letter worksheets')}
            title="Download Upper and lower case Letter worksheets"
            color="#f45e71"
            />

        <Text style={styles.tb3}></Text>
          <Text style={styles.tb3}>Alphabetical Order</Text>
          <Text style={styles.tb2}>Learning to alphabetize is an important life skill. Looking up a word in a dictionary, finding a book at the bookstore or looking through our phone contacts are all done in alphabetical order. These worksheets help students learn the ordering of letters.</Text>
           <Button
             onPress={() => Alert.alert('Successfully Downloaded Alphabetical Order worksheets')}
             title="Download Alphabetical Order worksheets"
             color="#f45e71"
            />
        </ScrollView>
</View>
  );
}





function Numbers({ navigation }) {
  return (
<View style={styles.bgColor}>
<Text style={styles.t5}>NUMBERS</Text>
<Image style={styles.nimage} source={{uri:'https://imgur.com/eO91k26.png' }}/>

<Text style={styles.t3}>Numbers worksheets</Text>
<Text style={styles.t2}>Our learning numbers worksheets introduce kids to recognizing and printing numbers. Numbers in words and ordinal numbers are also introduced, as is the concept of odd and even numbers. </Text>
<Text></Text>
        <ScrollView>
          <Text style={styles.tb3}> Tracing and printing numbers worksheets (1-20)</Text>
          <Text style={styles.tb2}>Below are kindergarten worksheets providing practice in printing numbers from one to twenty as both numerals and number words.  The repetitive writing out of numbers by hand is an effective means of learning to instantly recognize the basic numbers.  We suggest you print out the first ten worksheets (numbers 1-10) and wait until your student has mastered those prior to moving on.</Text>
            <Button
            onPress={() => Alert.alert('Successfully Downloaded Tracing and printing numbers worksheets')}
            title="Download Tracing and printing numbers worksheets"
            color="#f45e71"
            />
          <Text></Text>
          <Text style={styles.t6}>Number words worksheets (1-10)</Text>
          <Text style={styles.t2}>Students match numbers (e.g. "4") to their corresponding words (e.g. "four").  The first two worksheets cover 1-10; the last 2 worksheets cover 1-20.  Students need to instantly recognize both forms of the numbers.</Text>
            <Button
            onPress={() => Alert.alert('Successfully Downloaded Number words worksheets')}
            title="Download Number words worksheets"
            color="#f45e71"
            />
          <Text style={styles.tb3}></Text>
          <Text style={styles.tb3}>Coloring by numbers worksheets</Text>
          <Text style={styles.tb2}>Students color the pictures according to the given number scheme.  A classic and fun number recognition exercise.</Text>    
            <Button
            onPress={() => Alert.alert('Successfully Downloaded Coloring by numbers worksheets')}
            title="Download Coloring by numbers worksheets"
            color="#f45e71"
            />
     </ScrollView>
</View>
  );
}



function Shapes({ navigation }) {
  return ( 
        <View style={styles.bgColor}>
          <Text style={styles.t5}>SHAPES</Text>
            <Image style={styles.tinyLogo1} source={{uri:'https://imgur.com/nkZjPdI.png' }}/>
          <Text style={styles.t3}>Shape Worksheets for Preschool and Kindergarten</Text>
          <Text style={styles.t2}>These worksheets help students learn the basic shapes; they include exercises on tracing, drawing, naming and identifying 2D shapes, recognizing the difference between 2D and 3D shapes, and comparing shapes to real life objects.</Text>
          <Text></Text>
        
          <ScrollView>
            <Text style={styles.tb3}>Drawing and Identifying Simple Shapes</Text>
            <Text style={styles.tb2}>Below are 6 kindergarten worksheets on drawing and identifying simple shapes.  Students first are asked to trace a shape (e.g. circle), then draw it, then find all the circles in an array of different shapes.  Separate worksheets for circles, squares, rectangles, triangles, ovals and diamonds.</Text>
              <Button
                onPress={() => Alert.alert('Successfully Downloaded Drawing and Identifying worksheets')}
                title="Download Drawing and Identifying worksheets"
                color="#f45e71"
              />

            <Text style={styles.t6}>Matching Similar Shapes</Text>
            <Text style={styles.t2}>Below are 2 versions of our kindergarten worksheets on matching similar simple shapes.  Students draw a line between similar shapes (e.g. between two squares).  Shapes considered are circles, squares, rectangles, triangles, ovals and diamonds.</Text>
              <Button
                onPress={() => Alert.alert('Successfully Downloaded Matching similar shapes')}
                title="Download Matching similar shapes"
                color="#f45e71"
              />

            <Text style={styles.tb3}>Matching Shapes to Names</Text>
            <Text style={styles.tb2}>Below are 2 versions of our kindergarten worksheets on matching shapes to their written names.  Students draw a line between a shapes and the corresponding word for that shape. Shapes include circles, squares, rectangles, triangles, ovals and diamonds.</Text>
              <Button
                onPress={() => Alert.alert('Successfully Downloaded Matching shapes to names worksheets')}
                title="Download Matching shapes to names worksheets"
                color="#f45e71"
              />    
          </ScrollView>
        </View>
  );
}



function Colors({ navigation }) {
  return (  
       <View style={styles.bgColor}>
        <Text style={styles.t5}>COLORS</Text>
          <Image style={styles.tinyLogo2} source={{uri:'https://imgur.com/oy8IMNb.png' }}/>
        <Text style={styles.t3}>Colors Worksheets for Preschool and Kindergarten</Text>
        <Text style={styles.t2}>These colors worksheets help students learn the basic colors; they include exercises on tracing and printing the words for each color, matching objects to their colors and organizing pictures by their color.</Text>
        <Text></Text>

          <ScrollView>
            <Text style={styles.tb3}>Reading and Coloring Worksheets for Kindergarten</Text>
            <Text style={styles.tb2}>Below are 6 versions of our worksheets on reading the names of colors;  students are given a number of pictures with the name of a color written on them, and are asked to color each picture accordingly.  Good active practice in reading colors.</Text>
              <Button
                onPress={() => Alert.alert('Successfully Downloaded Reading and Coloring worksheets')}
                title="Download Reading and Coloring worksheets"
                color="#f45e71"
              />

        <Text style={styles.t6}>Matching Colors to their Written Names Worksheets</Text>
        <Text style={styles.t2}>Below are 3 versions of our kindergarten worksheets on the names of colors;   students match pictured colors to their written names.  This vocabulary exercise helps students learn the words corresponding to the basic colors.</Text>
          <Button
            onPress={() => Alert.alert('Successfully Downloaded Matching Colors to their Written Names')}
            title="Download Matching Colors to their Written Names"
            color="#f45e71"
          />

        <Text style={styles.tb3}>Learning the Basic Colors</Text>
        <Text style={styles.tb2}>Below are kindergarten worksheets on learning the basic colors. Students are shown a color and asked to trace and print the word for it as well as circle objects of that same color.  One worksheet each for blue, red, green, yellow, orange, purple, pink, brown, and black/white.</Text>
          <Button
            onPress={() => Alert.alert('Successfully Downloaded Learning the Basic Colors worksheets')}
            title="Download Learning the Basic Colors worksheets"
            color="#f45e71"
          />
          </ScrollView>
      </View>
    
  );
}

function LivingThings({ navigation }) {
  return (
     <View style={styles.bgColor}>
      <Text style={styles.t5}>LIVING THINGS</Text>
        <Image style={styles.tinyLogo1} source={{uri:'https://imgur.com/PnGxCzK.png' }}/>
      <Text style={styles.t3}>Living Things: all about Plants and Animals</Text>
      <Text style={styles.t2}>These kindergarten plants and animals worksheets focus on the needs of plants and animals and their relationship to their habitats.</Text>
      <Text></Text>

        <ScrollView>
          <Text style={styles.tb3}>Plants and animals are Living Things</Text>
          <Text style={styles.tb2}>Students distinguish living things (plants and animals) from non-living things (inanimate objects).</Text>
            <Button
            onPress={() => Alert.alert('Successfully Downloaded All about Plants and Animals worksheets')}
            title="Download All about Plants and Animals worksheets"
            color="#f45e71"
            />

          <Text style={styles.t6}>Identifying Plants and Animals worksheets</Text>
          <Text style={styles.t2}>In these worksheets, students learn to distinguish between plants from animals. </Text>
            <Button
            onPress={() => Alert.alert('Successfully Downloaded Plant or animal worksheets worksheets')}
            title="Download Plant or animal worksheets worksheets"
            color="#f45e71"
            />

          <Text style={styles.tb3}>ANIMALS</Text>
          <Text style={styles.tb3}>Matching Baby Animals to their Mothers</Text>
          <Text style={styles.tb2}>Students gain familiarity with different animals and their offspring by matching pictures of baby animals to their mothers.</Text>
            <Button
            onPress={() => Alert.alert('Successfully Downloaded Baby animals worksheets')}
            title="Download Baby animals worksheets"
            color="#f45e71"
            />

          <Text style={styles.t6}>Classifying Animals Worksheet: Legs and Wings</Text>
          <Text style={styles.t2}>Students count the legs and wings of different animals.  This classification exercise helps students recognize different animals and appreciate the diversity of animal life.</Text>
            <Button
            onPress={() => Alert.alert('Successfully Downloaded Legs and wings worksheets')}
            title="Download Legs and wings worksheets"
            color="#f45e71"
            />

          <Text style={styles.tb3}>PLANTS</Text>
          <Text style={styles.tb3}>Parts of Plants and Trees Worksheets</Text>
          <Text style={styles.tb2}>In the first worksheet, the students identify the parts of a plant (roots, flowers, stem, leaves), and in the second worksheet, they identify the parts of a tree (leaves, roots, trunk, branches).</Text>
            <Button
            onPress={() => Alert.alert('Successfully Downloaded Plant parts worksheets')}
            title="Download Plant parts worksheets"
            color="#f45e71"
            />

          <Text style={styles.t6}>The Needs of Plants: Sun, Soil, Air and Water</Text>
          <Text style={styles.t2}>In these kindergarten worksheets, students study the 4 things that plants need to grow: sun, soil, air and water through matching and identification exercises.</Text>
            <Button
            onPress={() => Alert.alert('Successfully Downloaded Needs of plants worksheets')}
            title="Download Needs of plants worksheets"
            color="#f45e71"
            />
         </ScrollView>
     </View>
  );
}






function HumanBody({ navigation }) {
  return (
     <View style={styles.bgColor}>
      <Text style={styles.t5}>HUMAN BODY</Text>
        <Image style={styles.himage} source={{uri:'https://imgur.com/G1NtuVU.png' }}/>
      <Text style={styles.t3}>The Human Body</Text>
      <Text style={styles.t2}>This worksheets help your kids identify the five senses and different parts of the body.</Text>
      <Text></Text>

        <ScrollView>
          <Text style={styles.tb3}>Labeling parts of the body worksheets</Text>
          <Text style={styles.tb2}>Students label eight parts of the body (arm, hand, leg, foot, eye, mouth, ear, nose).  In the 2nd worksheet, they match the same body parts to their names.</Text>
            <Button
            onPress={() => Alert.alert('Successfully Downloaded Labeling parts of the body worksheets')}
            title="Download Labeling parts of the body worksheets"
            color="#f45e71"
            />

          <Text></Text>
          <Text style={styles.t6}>The Five Senses</Text>
          <Text style={styles.t6}>Taste, See, Hear, Touch, Smell</Text>
          <Text style={styles.t2}>In these kindergarten science worksheets, students match senses (taste, hear, smell, see, touch) to their related body parts. </Text>
            <Button
              onPress={() => Alert.alert('Successfully Downloaded The Five senses worksheets: Taste, see, hear, touch, smell')}
              title="Download The Five senses worksheets: Taste, see, hear, touch, smell"
              color="#f45e71"
              />

          <Text  style={styles.tb3}></Text>
          <Text style={styles.tb3}>What do we touch, see, hear, smell and taste?</Text>
          <Text style={styles.tb2}>Students identify which senses are best used to sense particular objects. For example, fresh baked bread would be most closely associated with the sense of smell.</Text>
            <Button
            onPress={() => Alert.alert('Successfully Downloaded The Five Senses worksheets:What do we touch, see, hear, smell and taste?')}
            title="Download The Five Senses worksheets:What do we touch, see, hear, smell and taste?"
            color="#f45e71"
            />

        </ScrollView>
      </View>
  );
}


  

const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo1: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tinyLogo2: {
    width: 350,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bgColor:{
    backgroundColor:"#81c8eb",
    flex: 1,
    backgroundColor:"#f3e5ad",
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    fontSize: 12,
    height: 40,
    width: "50%",
    marginTop:10,
    paddingTop: 3,
    paddingBottom: 15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#f45e71',
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'black',
    
    
  },
  
  buttonText:{
    fontSize: 20,
    color: '#fff',
    textAlign:'center',
  },
  buttonText1:{
    fontSize: 17,
    color: '#fff',
    textAlign:'center',
   
  },
  button1:{
    fontSize: 12,
    height: 40,
    width: "80%",
    marginTop:10,
    paddingTop: 6,
    paddingBottom: 15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#f45e71',
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'black',
  
  },
  buttonText2:{
    fontSize: 17,
    color: '#fff',
    textAlign:'center',

  },
  button2:{
    fontSize: 15,
    height: 60,
    width: 120,
    marginTop:10,
    paddingTop: 6,
    paddingBottom: 15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#f45e71',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#5b8a72',
  },
  buttonText3:{
    fontSize: 17,
    color: '#fff',
    textAlign:'center',
  },
  button3:{
    fontSize: 15,
    height: 40,
    width: 125,
    marginTop:10,
    paddingTop: 6,
    paddingBottom: 15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#f45e71',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#5b8a72',
  },
  loginText:{
    color:"black",
    fontSize:15,
    marginVertical: 8,
  },
signupinputstyle:{
  height: 30, 
  width: 200 ,
   borderColor: 'black', 
   borderWidth: 0.5, 
   backgroundColor: 'white'
},
appName:{
  fontWeight: 'bold',
  fontSize: 35,
  marginVertical: 10
},
loginInput:{
  height: 35,
  width: 200 , 
  borderColor: 'black', 
  borderWidth: 0.5, 
  backgroundColor: 'white'
},
signinText:{
  fontWeight: 'bold'
},
t1:{
  fontWeight: 'bold', 
  fontSize: 25
},
tb1:{
  fontWeight: 'bold',
  fontSize: 20 ,
  textAlign: 'center',
  backgroundColor: '#68b6d9',
  width: "100%"
},
tb2:{
  fontSize: 15 ,
  textAlign: 'center',
  backgroundColor: '#68b6d9'
},
t2:{
  fontSize: 15 ,
  textAlign: 'center'
},
t3:{
  fontWeight: 'bold',
  fontSize: 20 ,
  textAlign: 'center'
},
t4:{
  fontSize:15
},
sbgColor:{
  backgroundColor:"#81c8eb",
  flex: 1,
  backgroundColor:"#f3e5ad",
  justifyContent: 'center'
},
t5:{
  fontWeight: 'bold',
  fontSize: 25,
  textAlign: 'center'
},
aimage: {
  width: 205,
  height: 210,
  justifyContent: 'center',
  alignItems: 'center',
},
tb3:{
  fontWeight: 'bold',
  fontSize: 15 ,
  textAlign: 'center',
  backgroundColor: '#68b6d9',
  width: "100%"
},
t6:{

    fontWeight: 'bold',
    fontSize: 15 ,
    textAlign: 'center',
},
nimage: {
  width: 370,
  height: 210,
  alignItems: 'center',
},
himage: {
  width: 300,
  height: 305,
  alignItems: 'center',
},
tb7:{
  fontWeight: 'bold',
  fontSize: 15 ,
  textAlign: 'center',
  backgroundColor: '#68b6d9',
  width: "100%"
},
mLogo2: {
  width: 370,
  height: 125,
  justifyContent: 'center',
  alignItems: 'center',
},
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WorkSheets" component={WorkSheets} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Alphabet" component={Alphabet} />
        <Stack.Screen name="Numbers" component={Numbers} />
        <Stack.Screen name="Shapes" component={Shapes} />
        <Stack.Screen name="Colors" component={Colors} />
        <Stack.Screen name="LivingThings" component={LivingThings} />
        <Stack.Screen name="HumanBody" component={HumanBody} />
        <Stack.Screen name="Mission" component={Mission} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
