package controller;

import com.fasterxml.jackson.databind.JsonNode;
import model.Lamp;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LampController {
    @RequestMapping(path = "/lamp" ,
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean getState() {
        return Lamp.stateLamp;
    }

    @RequestMapping(path = "/lamp" ,
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean changeState(@RequestBody JsonNode node) {
        Lamp.stateLamp = Boolean.parseBoolean(String.valueOf(node.get("value")));
        return Lamp.stateLamp;
    }

}
