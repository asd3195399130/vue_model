<template>
    <div class="clock">
        <div class="clock-face">
            <div class="hour-hand" :style="{ transform: `rotate(${hourHandRotation}deg)` }"></div>
            <div class="minute-hand" :style="{ transform: `rotate(${minuteHandRotation}deg)` }"></div>
            <div class="second-hand" :style="{ transform: `rotate(${secondHandRotation}deg)` }"></div>
            <div class="clock-numbers">
                <div class="number" v-for="(number, index) in numbers" :key="index" :style="{
                    transform: `rotate(${index * (360 / 12)}deg)`,
                    top: `${60 + Math.cos((index * (360 / 12)) * (Math.PI / 180)) * 80}px`,
                    left: `${60 + Math.sin((index * (360 / 12)) * (Math.PI / 180)) * 80}px`
                }">
                    {{ number }}
                </div>
            </div>
        </div>
        <div class="digital-time">{{ currentDigitalTime }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTime: new Date(),
            numbers: [6, 5, 4, 3, 2, 1, 12, 11, 10, 9, 8, 7],
            intervalId: null,
        };
    },
    computed: {
        secondHandRotation() {
            return (this.currentTime.getSeconds() / 60) * 360;
        },
        minuteHandRotation() {
            return (this.currentTime.getMinutes() / 60) * 360;
        },
        hourHandRotation() {
            return (
                ((this.currentTime.getHours() % 12) / 12) * 360 +
                (this.currentTime.getMinutes() / 60) * 30
            );
        },
        currentDigitalTime() {
            const hours = this.currentTime.getHours().toString().padStart(2, '0');
            const minutes = this.currentTime.getMinutes().toString().padStart(2, '0');
            const seconds = this.currentTime.getSeconds().toString().padStart(2, '0');

            return `${hours}:${minutes}:${seconds}`;
        },
    },
    mounted() {
        this.intervalId = setInterval(() => {
            this.currentTime = new Date();
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    }
};
</script>

<style scoped>
.clock {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}

.clock-face {
    position: relative;
    width: 200px;
    height: 200px;
    border: 2px solid #000;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hour-hand,
.minute-hand,
.second-hand {
    position: absolute;
    background-color: #000;
}

.hour-hand {
    width: 4px;
    height: 60px;
    left: calc(50% - 2px);
    top: 70px;
    transform-origin: bottom center;
    border-radius: 4px 4px 0 0;
}

.minute-hand {
    width: 3px;
    height: 80px;
    left: calc(50% - 1.5px);
    top: 50px;
    transform-origin: bottom center;
    border-radius: 3px 3px 0 0;
}

.second-hand {
    width: 2px;
    height: 100px;
    left: calc(50% - 1px);
    top: 30px;
    transform-origin: bottom center;
    background-color: red;
    border-radius: 2px 2px 0 0;
}

.clock-numbers {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    font-size: 16px;
}

.number {
    width: 20%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    position: absolute;
    transform-origin: bottom center;
}

.digital-time {
    font-size: 24px;
    margin-top: 50px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Microsoft YaHei';
    line-height: 1em;
    color: #000000;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #434343, #000000);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #434343, #000000);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-weight: bold;
    font-size: 80px;
    text-shadow: 0px 0px 0 rgb(231, 231, 231), 1px 1px 0 rgb(216, 216, 216), 2px 2px 0 rgb(202, 202, 202), 3px 3px 0 rgb(187, 187, 187), 4px 4px 0 rgb(243, 4, 4), 5px 5px 0 rgb(158, 158, 158), 6px 6px 0 rgb(144, 144, 144), 7px 7px 6px rgba(238, 6, 6, 0.6), 7px 7px 1px rgba(0, 0, 0, 0.5), 0px 0px 6px rgba(0, 0, 0, .2);
}
</style>
