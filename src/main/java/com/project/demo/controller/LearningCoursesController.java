package com.project.demo.controller;

import com.project.demo.entity.LearningCourses;
import com.project.demo.service.LearningCoursesService;
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
 * 学习课程：(LearningCourses)表控制层
 *
 */
@RestController
@RequestMapping("/learning_courses")
public class LearningCoursesController extends BaseController<LearningCourses, LearningCoursesService> {

    /**
     * 学习课程对象
     */
    @Autowired
    public LearningCoursesController(LearningCoursesService service) {
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
