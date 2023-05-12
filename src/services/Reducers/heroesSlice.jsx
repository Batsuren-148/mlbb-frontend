import { createSlice } from "@reduxjs/toolkit";
import { fetchHeroesData, fetchHeroById } from "../Actions/heroesAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const heroesSlice = createSlice({
    name: "heroes",
    initialState: {
        heroesData: [],
        status: "idle",
        error: null,
        // get by id hero information
        heroInfo: [],
        // heroInitial: [],
        heroInitialStatus: null,
        level: 1,
    },
    reducers: {
        addData: (state) => {
            if (state.level < 15) {
                state.level += 1;
                if (state.level <= 15) {
                    state.heroInfo.hp += state.heroInfo.hp_Grow;
                    state.heroInfo.mana += state.heroInfo.mana_Grow;
                    state.heroInfo.hp_regen += state.heroInfo.hp_regen_Grow;
                    state.heroInfo.hp_regen = Number(
                        state.heroInfo.hp_regen.toFixed(2)
                    );
                    state.heroInfo.mana_regen += state.heroInfo.mana_regen_Grow;
                    state.heroInfo.mana_regen = Number(
                        state.heroInfo.mana_regen.toFixed(2)
                    );
                    state.heroInfo.physical_attack +=
                        state.heroInfo.physical_attack_Grow;
                    state.heroInfo.physical_attack = Number(
                        state.heroInfo.physical_attack.toFixed(2)
                    );
                    state.heroInfo.magic_power +=
                        state.heroInfo.magic_power_Grow;
                    state.heroInfo.magic_power = Number(
                        state.heroInfo.magic_power.toFixed(2)
                    );
                    state.heroInfo.physical_defense +=
                        state.heroInfo.physical_defense_Grow;
                    state.heroInfo.physical_defense = Number(
                        state.heroInfo.physical_defense.toFixed(2)
                    );
                    state.heroInfo.magic_defense +=
                        state.heroInfo.magic_defense_Grow;
                    state.heroInfo.magic_defense = Number(
                        state.heroInfo.magic_defense.toFixed(2)
                    );
                    state.heroInfo.physical_penetration +=
                        state.heroInfo.physical_penetration_Grow;
                    state.heroInfo.physical_penetration = Number(
                        state.heroInfo.physical_penetration.toFixed(2)
                    );

                    state.heroInfo.magic_penetration +=
                        state.heroInfo.magic_penetration_Grow;
                    state.heroInfo.magic_penetration = Number(
                        state.heroInfo.magic_penetration.toFixed(2)
                    );
                    state.heroInfo.damage_reduction +=
                        state.heroInfo.damage_reduction_Grow;
                    state.heroInfo.damage_reduction = Number(
                        state.heroInfo.damage_reduction.toFixed(2)
                    );
                    state.heroInfo.attack_speed +=
                        state.heroInfo.attack_speed_Grow;
                    state.heroInfo.attack_speed = Number(
                        state.heroInfo.attack_speed.toFixed(2)
                    );
                    state.heroInfo.movement_speed +=
                        state.heroInfo.movement_speed_Grow;

                    // toast.success("Level Up", { autoClose: 1000 });
                }
            } else if ((state.level = 15)) {
                toast.warning("Max level", { autoClose: 1000 });
            }
        },
        deleteData: (state) => {
            if (state.heroInfo.hp > state.heroInitialStatus) {
                state.heroInfo.hp -= state.heroInfo.hp_Grow;
                state.heroInfo.mana -= state.heroInfo.mana_Grow;

                state.heroInfo.hp_regen -= state.heroInfo.hp_regen_Grow;
                state.heroInfo.hp_regen = Number(
                    state.heroInfo.hp_regen.toFixed(2)
                );
                state.heroInfo.mana_regen -= state.heroInfo.mana_regen_Grow;
                state.heroInfo.mana_regen = Number(
                    state.heroInfo.mana_regen.toFixed(2)
                );
                state.heroInfo.physical_attack -=
                    state.heroInfo.physical_attack_Grow;
                state.heroInfo.physical_attack = Number(
                    state.heroInfo.physical_attack.toFixed(2)
                );
                state.heroInfo.magic_power -= state.heroInfo.magic_power_Grow;
                state.heroInfo.magic_power = Number(
                    state.heroInfo.magic_power.toFixed(2)
                );
                state.heroInfo.physical_defense -=
                    state.heroInfo.physical_defense_Grow;
                state.heroInfo.physical_defense = Number(
                    state.heroInfo.physical_defense.toFixed(2)
                );
                state.heroInfo.magic_defense -=
                    state.heroInfo.magic_defense_Grow;
                state.heroInfo.magic_defense = Number(
                    state.heroInfo.magic_defense.toFixed(2)
                );
                state.heroInfo.physical_penetration -=
                    state.heroInfo.physical_penetration_Grow;
                state.heroInfo.physical_penetration = Number(
                    state.heroInfo.physical_penetration.toFixed(2)
                );
                state.heroInfo.magic_penetration -=
                    state.heroInfo.magic_penetration_Grow;
                state.heroInfo.magic_penetration = Number(
                    state.heroInfo.magic_penetration.toFixed(2)
                );
                state.heroInfo.damage_reduction -=
                    state.heroInfo.damage_reduction_Grow;
                state.heroInfo.damage_reduction = Number(
                    state.heroInfo.damage_reduction.toFixed(2)
                );
                state.heroInfo.attack_speed -= state.heroInfo.attack_speed_Grow;
                state.heroInfo.attack_speed = Number(
                    state.heroInfo.attack_speed.toFixed(2)
                );
                state.heroInfo.movement_speed -=
                    state.heroInfo.movement_speed_Grow;

                state.level -= 1;
                toast.error("Level Down", { autoClose: 1000 });
            } else if ((state.level = 1)) {
                toast.error("Min level", { autoClose: 1000 });
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroesData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchHeroesData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.heroesData = action.payload;
            })
            .addCase(fetchHeroesData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchHeroById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchHeroById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.heroInfo = action.payload;
                state.heroInitialStatus = state.heroInfo.hp;
                // state.heroInitial = action.payload;
            })
            .addCase(fetchHeroById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const {
    status,
    error,
    heroInfo,
    addData,
    heroGrow,
    deleteData,
    level,
    heroInitialStatus,
} = heroesSlice.actions;
export const selectHeroesData = (state) => state.heroes.heroesData;

export default heroesSlice.reducer;
