import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Task from './pages/Task';
import ListTask from './pages/ListTask';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes(){
   function ListScreen() {
      return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Create" component={Task} />
          <Tab.Screen name="List" component={ListTask} />
        </Tab.Navigator>
      );
    }

    
   return ( 
      <Stack.Navigator>
         <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
         <Stack.Screen name='Task' component={ListScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
   );
}
