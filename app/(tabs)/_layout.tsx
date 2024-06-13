import { Link, Tabs } from 'expo-router';

import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Exercíco 1',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Exercício 2',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
             <Link href="/modal" asChild>
               <HeaderButton />
             </Link>
          ),
        }}
      />
      <Tabs.Screen
         name="three"
         options={{
         title: 'Exercício 3',
         tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
         headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
            ),
      }}
      />
    </Tabs>
  );
}
