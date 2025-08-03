import Cover from "@/app/components/week6/Cover";
import Event from "@/app/components/week6/Event";
import HomeIconMenu from "@/app/components/week6/HomeIconMenu";
import Tour from "@/app/components/week6/Tour";
import TourFlatList from "@/app/components/week6/TourFlatList";
import React from "react";
import { ScrollView, View } from "react-native";

export default function Home() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'lightyellow', marginTop: 20 }}>
                <Cover />
                <HomeIconMenu />
                <Tour style={{ margin: 20 }} />
                <TourFlatList style={{ margin: 20 }} />
                <Event style={{ margin: 20 }} />
            </View>
        </ScrollView>

    );
}
