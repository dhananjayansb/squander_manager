//Header files

#include <ESP8266WiFi.h>

#include <BlynkSimpleEsp8266.h>

#include <ESP8266HTTPClient.h>

//Definitions

#define BLYNK_PRINT Serial

#define TRIGGERPIN1 D1

#define ECHOPIN1 D2

//Blynk Connection

char auth[] = "PVAdQo837AvFPnf4jIBJOsm_GXqAttno";

char ssid[] = "DJ";

char pass[] = "12345678";

18-09-2020

Ramco Institute of Technology

#

//Threshold Value

int sensorThres = 100;

WidgetLCD lcd(V1);

void setup() {

Serial.begin(115200);

pinMode(TRIGGERPIN1, OUTPUT);

pinMode(ECHOPIN1, INPUT);

Blynk.begin(auth, ssid, pass);

lcd.clear();

lcd.print(0, 0, "Distance in cm");

}

void loop() {

lcd.clear();

lcd.print(0, 0, "Distance in cm");

long duration1, distance1;

digitalWrite(TRIGGERPIN1, LOW);

18-09-2020

Ramco Institute of Technology

#

delayMicroseconds(3);

digitalWrite(TRIGGERPIN1, HIGH);

delayMicroseconds(12);

digitalWrite(TRIGGERPIN1, LOW);

duration1 = pulseIn(ECHOPIN1, HIGH);

distance1 = (duration1/2) / 29.1;

Serial.print(distance1);

Serial.println("Cm");

lcd.print(7, 1, distance1);

Blynk.run();

if (distance1 > sensorThres)

{

Serial.println("bin 1 level is high");

Blynk.email("dhana.rit20@gmail.com", "BIN 1 FULL", "collect it");

Serial.println("Notification Sent");

}

delay(100);

}