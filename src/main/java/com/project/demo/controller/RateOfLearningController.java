package com.project.demo.controller;

import com.project.demo.entity.RateOfLearning;
import com.project.demo.service.RateOfLearningService;
import com.project.demo.controller.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.*;

/**
 * 学习进度：(RateOfLearning)表控制层
 *
 */
@RestController
@RequestMapping("/rate_of_learning")
public class RateOfLearningController extends BaseController<RateOfLearning, RateOfLearningService> {

    /**
     * 学习进度对象
     */
    @Autowired
    public RateOfLearningController(RateOfLearningService service) {
        setService(service);
    }



    @PostMapping("/add")
    @Transactional
    public Map<String, Object> add(HttpServletRequest request) throws IOException {
        Map<String,Object> paramMap = service.readBody(request.getReader());
        this.addMap(paramMap);
        return success(1);
    }



    }
