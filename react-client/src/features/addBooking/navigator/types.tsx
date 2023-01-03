import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AddBookingParamList = {
  Contact: undefined,
  Tours: undefined,
  Main: undefined
};

export type AddBookingScreenProps<T extends keyof AddBookingParamList> =
  NativeStackScreenProps<AddBookingParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AddBookingParamList {}
  }
}