import { createStackNavigator } from "@react-navigation/stack";
import TravelProfile1 from "./TravelProfile1";
import TravelDetail from "./TravelDetail";
import TravelProfile2 from "./TravelProfile2";
import TravelProfile3 from "./TravelProfile3";
import TravelResult from "./TravelResult";
import TravelSelect from "./TravelSelect";
const Stack = createStackNavigator();

const TravelStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TravelProfile1" component={TravelProfile1} />
      <Stack.Screen name="TravelProfile2" component={TravelProfile2} />
      <Stack.Screen name="TravelProfile3" component={TravelProfile3} />
      <Stack.Screen name="TravelResult" component={TravelResult} />
      <Stack.Screen name="TravelSelect" component={TravelSelect} />
      <Stack.Screen name="TravelDetail" component={TravelDetail} />
    </Stack.Navigator>
  );
};

export default TravelStack;